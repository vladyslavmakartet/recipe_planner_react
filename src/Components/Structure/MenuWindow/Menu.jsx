import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import InputForms from './InputForms'
import WelcomeMessage from './WelcomeMessage'
import ShowRecipe from './ShowRecipe'
import Shopping from './Shopping'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MuiButton from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";


const ButtonDisabled = withStyles({
    root: {
        "&.Mui-disabled": {
            pointerEvents: "auto"
        }
    }
})(MuiButton);
const ButtonWithTooltip = ({ tooltipText, disabled, onClick, ...other }) => {
    const adjustedButtonProps = {
        disabled: disabled,
        component: disabled ? "div" : undefined,
        onClick: disabled ? undefined : onClick
    };
    return (
        <Tooltip title={tooltipText}>
            <ButtonDisabled {...other} {...adjustedButtonProps} />
        </Tooltip>
    );
};


const Menu = ({loadFromServer}) => {
    const [showAddRecipeForm, setShowAddRecipeForm] = useState(false)
    const [showRecipeData, setShowRecipeData] = useState(false)
    const [showEditRecipe, setShowEditRecipe] = useState(false)
    const [showShopping, setShowShopping] = useState(false)
    const [RecipeList, setRecipeList] = useState([])
    const [RecipeToBeShown, setRecipeToBeShown] = useState()
    const [RecipeToEdit, setRecipeToEdit] = useState()
    const [indexForEditing, setIndexForEditing] = useState()
    const [addRecipeForShopping, setAddRecipeForShopping] = useState([])
    const [IngredientListForShopping, setIngredientListForShopping] = useState([])

    useEffect(() => {
        if(loadFromServer){
            load()
        }
    }, [])
    const load = async ()=>
    {
        const getRecipes = async () => {
            const recipesFromServer = await fetchRecipes()
            if(recipesFromServer.length <= 0){
                //setEmptyServer(false)
                alert('No available recipes found on the server! Create a new one.')
            }
            setRecipeList(recipesFromServer)
        }
        getRecipes()
    }
    // Fetch Recipes
    const fetchRecipes = async () => {
        // const res = await fetch('http://localhost:8080/RecipeList')
        const res = await fetch('https://recipe-planner-pw.herokuapp.com/RecipeList')
        const data = await res.json()
        return data
    }

    const addRecipe = async (Recipe) => {

        if (showEditRecipe && (typeof indexForEditing !== 'undefined' && indexForEditing !== null)) {
            let newArr = [...RecipeList]
            newArr[indexForEditing] = Recipe
            const res = await fetch('https://recipe-planner-pw.herokuapp.com/RecipeList/' + Recipe._id,{
                method: 'PUT',
                headers:{
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(newArr[indexForEditing])
            })
            const data = await res.json()
            //setRecipeList(newArr)
            //setRecipeList([data])
            load()
            //setRecipeList([...RecipeList, data])
        }
        else {
            // const res = await fetch('http://localhost:8080/RecipeList',{
                console.log("Hello kurwa")
                const res = await fetch('https://recipe-planner-pw.herokuapp.com/add-recipe',{
                method: 'POST',
                headers:{
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(Recipe)
            })
            const data = await res.json()
            //setRecipeList([...RecipeList, Recipe])
            //setRecipeList([...RecipeList, data])
            load()
        }

        setShowAddRecipeForm(false)
        setShowRecipeData(false)
        setShowEditRecipe(false)
        // console.log(JSON.stringify(RecipeList))
    }
    const handleRemoveRecipe = async (e, itemToDelete, index) => {
         
        e.preventDefault();
        await fetch(`https://recipe-planner-pw.herokuapp.com/RecipeList/${itemToDelete._id}`,{
            method: 'DELETE',
        })
        setRecipeList((prev) => prev.filter((item) => item !== prev[index]));
        setShowRecipeData(false)
        setShowAddRecipeForm(false)
        setShowEditRecipe(false)
    }

    const handleShowRecipe = (e, item) => {
        e.preventDefault();
        setShowRecipeData(!showRecipeData)
        setShowAddRecipeForm(false)
        setShowEditRecipe(false)
        setRecipeToBeShown(item)
    }
    const handleEditRecipe = (e,item, index) => {
        e.preventDefault();
        setShowEditRecipe(true)
        setShowAddRecipeForm(true)
        setShowRecipeData(false)
        setRecipeToEdit(item)
        setIndexForEditing(index)
    }
    const handleShopping = (e) => {
        e.preventDefault();
        setShowShopping(!showShopping)
        setShowAddRecipeForm(false)
        setShowRecipeData(false)
        setShowEditRecipe(false)
        setAddRecipeForShopping()
        setIngredientListForShopping()
    }
    const handleAddRecipeForShopping = (e, item, index) => {
        e.preventDefault();
        //setAddRecipeForShopping([item]);
        addRecipeForShopping ? setAddRecipeForShopping((prev) => [...prev, item]) : setAddRecipeForShopping([item]);
        let newArr = JSON.parse(JSON.stringify(item.IngredientListFiltered));
        // get rid of duplicates
        newArr = newArr.reduce((a, c) => {
            var same = a.find(v => v.ingredientName == c.ingredientName && v.ingredientUnit == c.ingredientUnit);
            if (same) {
                same.ingredientQuantity = parseFloat(same.ingredientQuantity) + parseFloat(c.ingredientQuantity);
            } else {
                a.push(c);
            }
            return a;
        }, []);
        if (!IngredientListForShopping || IngredientListForShopping.length === 0) {
            newArr.sort((a, b) => (a.ingredientName > b.ingredientName) ? 1 : -1)
            setIngredientListForShopping(newArr)
        }
        else {
            let oldArray = JSON.parse(JSON.stringify(IngredientListForShopping));
            for (let i = 0; i < newArr.length; i++) {
                if (oldArray.some(x => x.ingredientName === newArr[i].ingredientName && x.ingredientUnit === newArr[i].ingredientUnit)) {
                    const indexValue = oldArray.findIndex(x => x.ingredientName === newArr[i].ingredientName && x.ingredientUnit === newArr[i].ingredientUnit)
                    if (indexValue !== (-1)) {
                        oldArray[indexValue].ingredientQuantity = Math.round(((parseFloat(oldArray[indexValue].ingredientQuantity) + parseFloat(newArr[i].ingredientQuantity)) + Number.EPSILON) * 100) / 100;
                    }
                }
                else {
                    oldArray.push(newArr[i])
                }
            }
            oldArray.sort((a, b) => (a.ingredientName > b.ingredientName) ? 1 : -1)
            setIngredientListForShopping(oldArray)
        }
    }
    const RemoveRecipeFromShopping = (index) => {
        const newArr2 = [...addRecipeForShopping]
        // get rid of duplicates
        let newArr = JSON.parse(JSON.stringify(addRecipeForShopping[index].IngredientListFiltered));
        newArr = newArr.reduce((a, c) => {
            var same = a.find(v => v.ingredientName == c.ingredientName && v.ingredientUnit == c.ingredientUnit);
            if (same) {
                same.ingredientQuantity = parseFloat(same.ingredientQuantity) + parseFloat(c.ingredientQuantity);
            } else {
                a.push(c);
            }
            return a;
        }, []);

        if (IngredientListForShopping && IngredientListForShopping.length !== 0) {
            let oldArray = JSON.parse(JSON.stringify(IngredientListForShopping));
            for (let i = 0; i < newArr.length; i++) {
                if (oldArray.some(x => x.ingredientName === newArr[i].ingredientName && x.ingredientUnit === newArr[i].ingredientUnit)) {
                    const indexValue = oldArray.findIndex(x => x.ingredientName === newArr[i].ingredientName && x.ingredientUnit === newArr[i].ingredientUnit)
                    if (indexValue !== (-1)) {
                        oldArray[indexValue].ingredientQuantity = Math.round(((parseFloat(oldArray[indexValue].ingredientQuantity) - parseFloat(newArr[i].ingredientQuantity)) + Number.EPSILON) * 100) / 100;
                        if (oldArray[indexValue].ingredientQuantity <= 0)
                            oldArray.splice(indexValue, 1)
                    }
                }
            }

            setIngredientListForShopping(oldArray)
        }
        newArr2.splice(index, 1)
        setAddRecipeForShopping(newArr2);

    }

    return (
        <div>
            <Grid container alignContent="center" justify="center" className="MenuHeaderButtonsMarginBot">


                {!showShopping
                    ? [
                        RecipeList.length > 0
                            ? [
                                <ButtonGroup size="large" aria-label="small button group" variant="contained" fullWidth={true} color="primary">
                                    <Button style={{ textTransform: "none" }} onClick={load} endIcon={<CloudDownloadOutlinedIcon />}>Load</Button>
                                    {/* <Button style={{ textTransform: "none" }} endIcon={<CloudUploadOutlinedIcon />}>Save </Button> */}
                                    <Button style={{ textTransform: "none" }} endIcon={<ShoppingCartOutlinedIcon />} onClick={(e) => { handleShopping(e) }}>Shopping </Button>
                                </ButtonGroup>
                            ]
                            : [
                                <ButtonGroup size="large" aria-label="small button group" variant="contained" fullWidth={true} color="primary">
                                    {/* {EmptyServer 
                                    ?
                                        <ButtonWithTooltip tooltipText="No available recipes found on the server! Create a new one." style={{ textTransform: "none" }} endIcon={<CloudDownloadOutlinedIcon />} disabled>{"Load"}</ButtonWithTooltip>
                                    : */}
                                        <Button style={{ textTransform: "none" }} onClick={load} endIcon={<CloudDownloadOutlinedIcon />}>Load</Button>
                                    {/* } */}
                                    {/* <ButtonWithTooltip tooltipText="Add some recipes before saving" style={{ textTransform: "none" }} endIcon={<CloudUploadOutlinedIcon />} disabled>{"Save"} </ButtonWithTooltip> */}
                                    <ButtonWithTooltip tooltipText="Add some recipes before shopping" style={{ textTransform: "none" }} endIcon={<ShoppingCartOutlinedIcon />} disabled>
                                        {"Shopping"}
                                    </ButtonWithTooltip>
                                </ButtonGroup>


                            ]
                    ]
                    :
                    <ButtonGroup size="large" aria-label="small button group" variant="contained" fullWidth={true} color="primary">
                        <ButtonWithTooltip tooltipText="Close the shopping list before loading" style={{ textTransform: "none" }} endIcon={<CloudDownloadOutlinedIcon />} disabled>{"Load"}</ButtonWithTooltip>
                        {/* <ButtonWithTooltip tooltipText="Close the shopping list before saving" style={{ textTransform: "none" }} endIcon={<CloudUploadOutlinedIcon />} disabled>{"Save"} </ButtonWithTooltip> */}
                        {RecipeList.length > 0
                            ? <Button style={{ textTransform: "none" }} endIcon={<ShoppingCartOutlinedIcon />} onClick={(e) => { handleShopping(e) }}>Shopping </Button>
                            : <ButtonWithTooltip tooltipText="Add some recipes before shopping" style={{ textTransform: "none" }} endIcon={<ShoppingCartOutlinedIcon />} disabled>
                                {"Shopping"}
                            </ButtonWithTooltip>}
                    </ButtonGroup>
                }
            </Grid>
            <Grid container >
                <Grid item xs={4} >
                    <Grid item className="left scrollbar containerMenu" style={{ marginTop: "10px", marginBottom: "10px" }} id="style-4" >
                        {(RecipeList.length === 0) ?
                            <Grid container
                                direction="column"
                                alignItems="center"
                                justify="center"

                                style={{ minHeight: '50vh' }}>
                                <Grid item xs={12} className="WordWrap paragraph" >
                                    <h4>Currently nothing is here!</h4>
                                </Grid>
                            </Grid>
                            : RecipeList.map((item, index) => (
                                <Grid key={`item-${index}`} container>
                                    <Grid container className="RecipeName" alignItems="center">
                                        <Grid item xs={10} className="WordWrap paragraph" >
                                            <h3 onClick={(e) => showShopping ? "" : handleShowRecipe(e, item)}>
                                                {item.recipeName}</h3>
                                        </Grid>
                                        {showShopping ?
                                            <>
                                                <Grid item xs={2} align="center" >
                                                    <AddOutlinedIcon
                                                        className="ActionButton"
                                                        style={{ cursor: 'pointer' }}
                                                        onClick={(e) => { handleAddRecipeForShopping(e, item, index) }}
                                                    />
                                                </Grid>

                                            </>
                                            : <>
                                                <Grid item xs={1}>
                                                    <EditOutlinedIcon
                                                        className="ActionButton"
                                                        style={{ cursor: 'pointer' }}
                                                        onClick={(e) => { handleEditRecipe(e, item, index) }}
                                                    />
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <DeleteForeverOutlinedIcon
                                                        className="ActionButton"
                                                        color="secondary"
                                                        style={{ cursor: 'pointer' }}
                                                        onClick={(e) => handleRemoveRecipe(e, item, index)}

                                                    />

                                                </Grid>
                                            </>
                                        }

                                    </Grid>
                                </Grid>

                            ))}
                    </Grid>
                    {(() => {
                        if (showAddRecipeForm)
                            return <Button onClick={() => (
                                setShowAddRecipeForm(!showAddRecipeForm),
                                setShowEditRecipe(false),
                                setShowRecipeData(false))}
                                size="large"
                                variant="contained"
                                color="primary"
                                fullWidth={true}
                                style={{ textTransform: "none" }}
                            >
                                Cancel
                                </Button>
                        else if (showRecipeData || showEditRecipe)
                            return <Button onClick={() => (
                                setShowAddRecipeForm(false),
                                setShowEditRecipe(false),
                                setShowRecipeData(false)
                            )}
                                size="large"
                                variant="contained"
                                color="primary"
                                fullWidth={true}
                                style={{ textTransform: "none" }}
                            >
                                Cancel
                                </Button>
                        else if (showShopping)
                            return <Button onClick={() => (
                                setShowAddRecipeForm(false),
                                setShowEditRecipe(false),
                                setShowRecipeData(false),
                                setShowShopping(false)
                            )}
                                size="large"
                                variant="contained"
                                color="primary"
                                fullWidth={true}
                                style={{ textTransform: "none" }}
                            >
                                Close the shopping list
                                </Button>

                        else if (!showAddRecipeForm)
                            return <Button onClick={() => (
                                setShowAddRecipeForm(!showAddRecipeForm),
                                setShowEditRecipe(false),
                                setShowRecipeData(false))}
                                size="large"
                                variant="contained"
                                color="primary"
                                fullWidth={true}
                                style={{ textTransform: "none" }}
                            >
                                Add Recipe
                                    </Button>

                    })()}

                </Grid>
                <Grid item xs={8} className="right scrollbar containerMenu WordWrap" id="style-4">
                    {(() => {
                        if (!showRecipeData && !showAddRecipeForm && !showEditRecipe && !showShopping)
                            return <WelcomeMessage />;
                        else if (showAddRecipeForm) {
                            if (!showEditRecipe)
                                return <InputForms onAdd={addRecipe} />;
                            else if (showEditRecipe)
                                return <InputForms onAdd={addRecipe} RecipeToBeEdited={RecipeToEdit} />
                            else if (showAddRecipeForm && showEditRecipe)
                                return setShowEditRecipe(false)
                        }
                        else if (showRecipeData && !showEditRecipe)
                            return <ShowRecipe recipeToShow={RecipeToBeShown} />;
                        else if (showShopping)
                            return <Shopping RemoveRecipeFromShopping={RemoveRecipeFromShopping} RecipeForShopping={addRecipeForShopping} IngredientListForShopping={IngredientListForShopping} />

                    })()}
                </Grid>
            </Grid>
        </div >
    )
}

export default Menu

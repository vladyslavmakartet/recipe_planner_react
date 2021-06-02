import React, { useState } from 'react'
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


const Menu = () => {
    const [showAddRecipeForm, setShowAddRecipeForm] = useState(false)
    const [showRecipeData, setShowRecipeData] = useState(false)
    const [showEditRecipe, setShowEditRecipe] = useState(false)
    const [showShopping, setShowShopping] = useState(false)

    const [RecipeList, setRecipeList] = useState([])
    const [RecipeToBeShown, setRecipeToBeShown] = useState()
    const [RecipeToEdit, setRecipeToEdit] = useState()
    const [indexForEditing, setIndexForEditing] = useState()
    const [addRecipeForShopping, setAddRecipeForShopping] = useState()

    const addRecipe = (Recipe) => {
        if (showEditRecipe && (typeof indexForEditing !== 'undefined' && indexForEditing !== null)) {
            let newArr = [...RecipeList]
            newArr[indexForEditing] = Recipe
            setRecipeList(newArr)
        }
        else {
            setRecipeList([...RecipeList, Recipe])
        }

        setShowAddRecipeForm(false)
        setShowRecipeData(false)
        setShowEditRecipe(false)
    }
    const handleRemoveRecipe = (e, index) => {
        e.preventDefault();
        setRecipeList((prev) => prev.filter((item) => item !== prev[index]));
        setShowRecipeData(false)
        setShowAddRecipeForm(false)
        setShowEditRecipe(false)
    }

    const handleShowRecipe = (item) => {
        setShowRecipeData(!showRecipeData)
        setShowAddRecipeForm(false)
        setShowEditRecipe(false)
        setRecipeToBeShown(item)
    }
    const handleEditRecipe = (item, index) => {
        setShowEditRecipe(true)
        setShowAddRecipeForm(true)
        setShowRecipeData(false)
        setRecipeToEdit(item)
        setIndexForEditing(index)
    }
    const handleShopping = () => {
        setShowShopping(!showShopping)
        setShowAddRecipeForm(false)
        setShowRecipeData(false)
        setShowEditRecipe(false)
        setAddRecipeForShopping()
    }
    return (
        <div>
            <Grid container alignContent="center" justify="center" className="MenuHeaderButtonsMarginBot">
                <ButtonGroup size="large" aria-label="small button group" variant="contained" fullWidth={true} color="primary">
                    <Button style={{ textTransform: "none" }} endIcon={<CloudDownloadOutlinedIcon />}>Load</Button>
                    <Button style={{ textTransform: "none" }} endIcon={<CloudUploadOutlinedIcon />}>Save </Button>
                    {RecipeList.length > 0
                        ? <Button style={{ textTransform: "none" }} endIcon={<ShoppingCartOutlinedIcon />} onClick={() => { handleShopping() }}>Shopping </Button>
                        : <ButtonWithTooltip tooltipText="Add some recipes before shopping" style={{ textTransform: "none" }} endIcon={<ShoppingCartOutlinedIcon />} disabled>
                            {"Shopping"}
                        </ButtonWithTooltip>}

                </ButtonGroup>
            </Grid>
            <Grid container >
                <Grid item xs={4} >
                    <Grid item className="left scrollbar containerMenu" style={{ marginTop: "10px", marginBottom: "10px" }} id="style-4" >
                        {(RecipeList.length === 0) ?
                            <Grid container spacing={0}
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
                                            <h3 onClick={(e) => showShopping ? "" :handleShowRecipe(item)}>
                                                {item.recipeName}</h3>
                                        </Grid>
                                        {showShopping ?
                                            <>
                                                <Grid item xs={2} align = "center" >
                                                    <AddOutlinedIcon
                                                        className="ActionButton"
                                                        style={{ cursor: 'pointer' }}
                                                        onClick={() => {setAddRecipeForShopping(item)  }}
                                                    />
                                                </Grid>

                                            </>
                                            : <>
                                                <Grid item xs={1}>
                                                    <EditOutlinedIcon
                                                        className="ActionButton"
                                                        style={{ cursor: 'pointer' }}
                                                        onClick={(e) => { handleEditRecipe(item, index) }}
                                                    />
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <DeleteForeverOutlinedIcon
                                                        className="ActionButton"
                                                        color="secondary"
                                                        style={{ cursor: 'pointer' }}
                                                        onClick={(e) => handleRemoveRecipe(e, index)}

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
                            return <Shopping RecipeForShopping={addRecipeForShopping}/>

                    })()}
                </Grid>
            </Grid>
        </div>
    )
}

export default Menu

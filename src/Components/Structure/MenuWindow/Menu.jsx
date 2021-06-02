import React, { useState } from 'react'
import MenuHeaderButtons from './MenuHeaderButtons'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import InputForms from './InputForms'
import WelcomeMessage from './WelcomeMessage'

import ShowRecipe from './ShowRecipe'


const Menu = () => {
    const [showAddRecipeForm, setShowAddRecipeForm] = useState(false)
    const [showRecipeData, setShowRecipeData] = useState(false)
    const [showEditRecipe, setEditRecipe] = useState(false)
    const [RecipeList, setRecipeList] = useState([])
    const [RecipeToBeShown, setRecipeToBeShown] = useState()
    const [RecipeToEdit, setRecipeToEdit] = useState()
    const [indexForEditing, setIndexForEditing] = useState()

    const addRecipe = (Recipe) => {
        if(showEditRecipe && (typeof indexForEditing !== 'undefined' || indexForEditing !== null)){
            let newArr = [...RecipeList]
            newArr[indexForEditing] = Recipe
            setRecipeList(newArr)
        }
        else
            {
                setRecipeList([...RecipeList, Recipe])
            } 
       
        setShowAddRecipeForm(false)
        setShowRecipeData(false)
        setEditRecipe(false)
    }
    const handleRemoveRecipe = (e, index) => {
        e.preventDefault();
        setRecipeList((prev) => prev.filter((item) => item !== prev[index]));
    }

    const handleShowRecipe = (item) => {
        setShowRecipeData(!showRecipeData)
        setShowAddRecipeForm(false)
        setEditRecipe(false)
        setRecipeToBeShown(item)
    }
    const handleEditRecipe = (item, index) => {
        setEditRecipe(true)
        setShowAddRecipeForm(true)
        setShowRecipeData(false)
        setRecipeToEdit(item)
        setIndexForEditing(index)
    }
    return (
        <div>
            <MenuHeaderButtons />
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
                                            <h3 onClick={(e) => handleShowRecipe(item)}>
                                                {item.recipeName}</h3>
                                        </Grid>
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

                                    </Grid>
                                </Grid>

                            ))}
                    </Grid>
                    {(() => {
                        if (showAddRecipeForm)
                            return <Button onClick={() => (
                                setShowAddRecipeForm(!showAddRecipeForm),
                                setEditRecipe(false),
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
                                setEditRecipe(false),
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

                        else if (!showAddRecipeForm)
                            return <Button onClick={() => (
                                setShowAddRecipeForm(!showAddRecipeForm),
                                setEditRecipe(false),
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
                        if (!showRecipeData && !showAddRecipeForm && !showEditRecipe)
                            return <WelcomeMessage />;
                        else if (showAddRecipeForm) {
                            if (!showEditRecipe)
                                return <InputForms onAdd={addRecipe} />;
                            else if (showEditRecipe)
                                return <InputForms onAdd={addRecipe} RecipeToBeEdited={RecipeToEdit} />
                            else if (showAddRecipeForm && showEditRecipe)
                                return setEditRecipe(false)
                        }
                        else if (showRecipeData && !showEditRecipe)
                            return <ShowRecipe recipeToShow={RecipeToBeShown} />;

                    })()}
                </Grid>
            </Grid>
        </div>
    )
}

export default Menu

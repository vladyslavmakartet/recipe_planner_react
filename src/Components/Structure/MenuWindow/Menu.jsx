import React from 'react'
import MenuHeaderButtons from './MenuHeaderButtons'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { useState } from 'react'
import InputForms from './InputForms'
import WelcomeMessage from './WelcomeMessage'
const Menu = () => {
    const [showAddRecipeForm, setShowAddRecipeForm] = useState(false)
    const [RecipeList, setRecipeList] = useState([])

    const addRecipe = (Recipe) => {
        setRecipeList([...RecipeList, Recipe])
    }
    const handleRemoveRecipe = (e, index) => {
        e.preventDefault();
        setRecipeList((prev) => prev.filter((item) => item !== prev[index]));
    }
    const setFalse = (choice) => {
        !choice && setShowAddRecipeForm(!showAddRecipeForm)
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
                                <Grid item xs={12} className="WordWrap">
                                    <h4>Currently nothing is here!</h4>
                                </Grid>
                            </Grid>
                            : RecipeList.map((item, index) => (
                                <Grid key={`item-${index}`} container>
                                    <Grid container className="RecipeName" alignItems="center">
                                        <Grid item xs={10} className="WordWrap">
                                            <h3>{item.recipeName}</h3>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <EditOutlinedIcon
                                                className="ActionButton"
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => { }}
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
                    {showAddRecipeForm ?
                        <Button onClick={() => setShowAddRecipeForm(!showAddRecipeForm)} size="large" variant="contained" color="primary" fullWidth={true} style={{ textTransform: "none" }}>Cancel</Button> :
                        <Button onClick={() => setShowAddRecipeForm(!showAddRecipeForm)} size="large" variant="contained" color="primary" fullWidth={true} style={{ textTransform: "none" }}>Add Recipe</Button>}
                </Grid>
                <Grid item xs={8} className="right scrollbar containerMenu WordWrap" id="style-4">
                    {!showAddRecipeForm && <WelcomeMessage />}
                    {showAddRecipeForm && <InputForms onAdd={addRecipe} myClick={setFalse} />}

                </Grid>
            </Grid>
        </div>
    )
}

export default Menu

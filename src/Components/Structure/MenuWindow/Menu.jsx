import React from 'react'
import MenuHeaderButtons from './MenuHeaderButtons'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { useState } from 'react'
import InputForms from './InputForms'
import WelcomeMessage from './WelcomeMessage'
const Menu = () => {
    const [showAddRecipeForm, setShowAddRecipeForm] = useState(false)
    const [RecipeList, setRecipeList] = useState([])

    const addRecipe = (Recipe) => {
        setRecipeList([...RecipeList, Recipe])
        // console.log(Recipe)
        // console.log(RecipeList)
    }
    //  console.log(RecipeList)
    const setFalse = (choice) => {
        !choice && setShowAddRecipeForm(!showAddRecipeForm)
    }
    return (
        <div>
            <MenuHeaderButtons />
            <Grid container >
                <Grid item xs={4} >
                    <Grid item className="left scrollbar containerMenu" style={{ marginBottom: "10px" }} id="style-4" >
                        {(RecipeList.length === 0) ?
                            <p>Currently nothing is here!!!</p>
                            : RecipeList.map((item, index) => (
                                <Grid key={`item-${index}`} container style={{ marginTop: "10px" }}>
                                    <Grid item className="RecipeName">
                                        <div>
                                            <div>{item.recipeName}</div>
                                            {/* <ButtonGroup color="primary" aria-label="outlined primary button group" >
                                                <Button size="small" variant="contained" color="primary" style={{ textTransform: "none" }}>Add</Button>
                                                <Button size="small" variant="contained" color="primary" style={{ textTransform: "none" }}>Save</Button>
                                            </ButtonGroup> */}
                                        </div>
                                    </Grid>
                                </Grid>

                            ))}



                    </Grid>
                    {showAddRecipeForm ?
                        <Button onClick={() => setShowAddRecipeForm(!showAddRecipeForm)} size="large" variant="contained" color="primary" fullWidth={true} style={{ textTransform: "none" }}>Cancel</Button> :
                        <Button onClick={() => setShowAddRecipeForm(!showAddRecipeForm)} size="large" variant="contained" color="primary" fullWidth={true} style={{ textTransform: "none" }}>Add Recipe</Button>}
                </Grid>
                <Grid item xs={8} className="right scrollbar containerMenu" id="style-4">
                    {!showAddRecipeForm && <WelcomeMessage />}
                    {showAddRecipeForm && <InputForms onAdd={addRecipe} myClick={setFalse} />}

                </Grid>
            </Grid>
        </div>
    )
}

export default Menu

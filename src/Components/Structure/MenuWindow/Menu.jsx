import React from 'react'
import MenuHeaderButtons from './MenuHeaderButtons'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { useState } from 'react'
import InputForms from './InputForms'
import WelcomeMessage from './WelcomeMessage'
const Menu = () => {
const [showAddRecipeForm, setShowAddRecipeForm] = useState(false)
const addRecipe = (ingredient) => {
    console.log(ingredient)
}
    return (
        <div>
            <MenuHeaderButtons />
            <Grid container >
                <Grid item xs={4} >
                    <Grid item className="left scrollbar containerMenu" style={{marginBottom:"10px"}} id="style-4" >
                    <p>Currently nothing is here!</p>
                    </Grid>
                    {showAddRecipeForm ? 
                    <Button onClick={() => setShowAddRecipeForm(!showAddRecipeForm)} size="large" variant="contained" color="primary" fullWidth={true} style={{ textTransform: "none" }}>Cancel</Button>:
                    <Button onClick={() => setShowAddRecipeForm(!showAddRecipeForm)} size="large" variant="contained" color="primary" fullWidth={true} style={{ textTransform: "none" }}>Add Recipe</Button>}
                </Grid>
                <Grid item xs={8} className="right scrollbar containerMenu" id="style-4">
                    {!showAddRecipeForm && <WelcomeMessage />}
                    {showAddRecipeForm && <InputForms onAdd={addRecipe}/>}

                </Grid>
            </Grid>
        </div>
    )
}

export default Menu

import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid'
function ShowRecipe({ recipeToShow }) {

    return (
        <>
            <Grid container className="scrollbar " id="style-4" spacing={3} direction="column">
                <Grid item className="header">
                    {recipeToShow.recipeName}
                </Grid>
                <Grid item className="paragraphRecipe">
                    {recipeToShow.recipeDescription}
                </Grid>
                <div className="paragraphRecipe">You will need:</div>
                <Grid item >
                    {recipeToShow.IngredientListFiltered.map((item, index) => (
                        <Grid key={`item-${index}`} item className="paragraphRecipe">
                            <div>{item.ingredientName + " " + item.ingredientQuantity + " " + item.ingredientUnit}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </>
    )
}

export default ShowRecipe

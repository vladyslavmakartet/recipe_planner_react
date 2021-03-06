import React from 'react'
import Grid from '@material-ui/core/Grid'
function ShowRecipe({ recipeToShow }) {
    // console.log(JSON.stringify(recipeToShow))
    return (
        <>
            <Grid container className="scrollbar " id="style-4" spacing={3} direction="column">
                <Grid item className="header">
                    {recipeToShow.recipeName}
                </Grid>
                <Grid item className="paragraphRecipe">
                    {recipeToShow.recipeDescription}
                </Grid>
                <Grid item className="paragraphRecipe">
                    You will need:
                </Grid>
                <Grid item >
                    {recipeToShow.IngredientListFiltered.map((item, index) => (
                        <Grid key={`item-${index}`} item className="paragraphRecipe">
                            {(index + 1) +") " + item.ingredientName + " " + item.ingredientQuantity + " " + item.ingredientUnit}
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </>
    )
}

export default ShowRecipe

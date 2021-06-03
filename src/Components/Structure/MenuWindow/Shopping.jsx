import React from 'react'
import Grid from '@material-ui/core/Grid'
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
const Shopping = ({ RemoveRecipeFromShopping, RecipeForShopping, IngredientListForShopping }) => {


    return (
        <>
            <Grid container>
                <Grid container spacing={2}>
                    {
                        RecipeForShopping &&
                        RecipeForShopping.map((item, index) => (
                            <Grid key={`item-${index}`} item xs={3} >
                                <div className="RecipeNameShopping">
                                    <Grid container justify="center" alignItems="center">
                                        <Grid item xs={10} className="truncate">
                                            {item.recipeName}
                                        </Grid>
                                        <Grid item xs={2} >
                                            <DeleteForeverOutlinedIcon
                                                className="ActionButtonShopping"
                                                color="secondary"
                                                align="center" justify="center"
                                                style={{ cursor: 'pointer', fontSize: 17 }}

                                                onClick={() => RemoveRecipeFromShopping(index)}

                                            />

                                        </Grid>
                                    </Grid>
                                </div>

                            </Grid>
                        ))
                    }

                    {IngredientListForShopping &&
                        <Grid container style={{ marginTop: "10px" }}>
                            <Grid item >
                                <Grid item className="paragraphRecipe">
                                {IngredientListForShopping.length > 0 && "You will need:"}
                    </Grid>
                                {IngredientListForShopping.map((item, index) => (
                                    <Grid key={`item-${index}`} item className="paragraphRecipe">
                                        {(index + 1) + ") " + item.ingredientName + " " + item.ingredientQuantity + " " + item.ingredientUnit}
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    }
                </Grid>
            </Grid>
        </>
    )
}

export default Shopping

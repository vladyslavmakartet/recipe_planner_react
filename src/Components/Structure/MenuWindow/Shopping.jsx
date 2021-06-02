// import React, { useState } from 'react'
// import Grid from '@material-ui/core/Grid'

// const Shopping = ({ RecipeForShopping }) => {

//     const [RecipeListForShopping, setRecipeListForShopping] = useState(RecipeForShopping && RecipeForShopping)

//     // const update=()=>
//     // {
//     //     //RecipeForShopping && setRecipeListForShopping(RecipeListForShopping => [...RecipeListForShopping, RecipeForShopping])
//     //     setRecipeListForShopping( RecipeForShopping)

//     // }
//     //setRecipeListForShopping(RecipeForShopping && [...RecipeListForShopping, RecipeForShopping])
//     // setIngredientList((prev) => [...prev, inputState]);
//     return (
//         <div>

//             {(() => {
//                 // update()
//                 if (RecipeListForShopping && (typeof RecipeForShopping !== 'undefined' && RecipeForShopping !== null)) {
//                     RecipeListForShopping.map((item, index) => (
//                         <Grid key={`item-${index}`} container>
//                             <Grid container className="RecipeName" alignItems="center">
//                                 <Grid item xs={10} className="WordWrap paragraph" >

//                                     {item.recipeName}
//                                 </Grid>
//                             </Grid>
//                         </Grid>
//                     ))
//                 }
//             })()}
//         </div>
//     )
// }

// export default Shopping

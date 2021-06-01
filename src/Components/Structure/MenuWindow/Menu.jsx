import React, { useState } from 'react'
// import FunctionContextComponent from './'
import MenuHeaderButtons from './MenuHeaderButtons'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import InputForms from './InputForms'
import WelcomeMessage from './WelcomeMessage'
// export const RecipeContext = React.createContext()
import ShowRecipe from './ShowRecipe'

const Menu = () => {
    // const [showWelcome, setShowWelcome] = useState(true)
    const [showAddRecipeForm, setShowAddRecipeForm] = useState(false)
    const [showRecipeData, setShowRecipeData] = useState(false)
    const [RecipeList, setRecipeList] = useState([])
    const [RecipeToBeShown, setRecipeToBeShown] = useState()

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
    const handleShowRecipe = (item) => {
        setShowRecipeData(!showRecipeData)
        setRecipeToBeShown(item)
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
                    {(() => {
                        if (!showRecipeData && !showAddRecipeForm)
                            return <WelcomeMessage />;
                        else if (showAddRecipeForm) {
                            return <InputForms onAdd={addRecipe} myClick={setFalse} />;
                        }
                        else if (showRecipeData)
                            return <ShowRecipe recipeToShow={RecipeToBeShown} />;

                    })()}


                    {/* {(!showRecipeData && !showAddRecipeForm) && <WelcomeMessage />}
                    {(showAddRecipeForm && !showRecipeData) && <InputForms onAdd={addRecipe} myClick={setFalse} />}
                    {(showRecipeData && !showAddRecipeForm) && <ShowRecipe recipeToShow={RecipeToBeShown} />} */}
                </Grid>
            </Grid>
        </div>
    )
}

export default Menu

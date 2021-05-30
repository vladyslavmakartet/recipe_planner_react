import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import TextField from '@material-ui/core/TextField';
import { useState } from 'react'




const InputForms = ({ onAdd }) => {
    const [recipeName, setRecipeName] = useState('')
    const [recipeDescription, setRecipeDescription] = useState('')
    const [ingredientName, setIngredientName] = useState('')
    const [ingredientQuantity, setIngredientQuantity] = useState('')
    const [ingredientUnit, setIngredientUnit] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!recipeName || !recipeDescription || !ingredientName || !ingredientQuantity || !ingredientUnit) {
            alert('Please fill all the inputs')
            return
        }
        onAdd({ recipeName, recipeDescription, ingredientName, ingredientQuantity, ingredientUnit })
        setRecipeName('')
        setRecipeDescription('')
        setIngredientName('')
        setIngredientQuantity('')
        setIngredientUnit('')
    }
    return (
        <form onSubmit={onSubmit}>

            <Grid container className="scrollbar" id="style-4">
                <TextField
                    id="outlined-full-width"
                    label="Name"

                    placeholder="e.g Kebab"
                    helperText="Enter recipe's name"
                    fullWidth={true}
                    margin="normal"
                    required
                    value={recipeName} onChange={(e) => setRecipeName(e.target.value)}
                    variant="outlined"
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    placeholder="e.g Some ingredients"
                    variant="outlined"
                    helperText="Enter recipe's description"
                    fullWidth={true}
                    value={recipeDescription} onChange={(e) => setRecipeDescription(e.target.value)}
                    required
                />
                <Grid container style={{ marginTop: "20px" }} align="center">

                    <Grid item xs={4}>
                        <TextField
                            required
                            label="Name"
                            placeholder="e.g Meat"
                            variant="outlined"
                            value={ingredientName} onChange={(e) => setIngredientName(e.target.value)}

                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField

                            label="Quantity"
                            type="number"
                            placeholder="e.g 10"
                            variant="outlined"
                            inputProps={{ min: "0.01", step: "0.01" }}
                            required
                            value={ingredientQuantity} onChange={(e) => setIngredientQuantity(e.target.value)}

                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required

                            label="Unit"
                            placeholder="e.g Kg"
                            variant="outlined"
                            value={ingredientUnit} onChange={(e) => setIngredientUnit(e.target.value)}

                        />
                    </Grid>
                </Grid>

            </Grid>
            <ButtonGroup color="primary" aria-label="outlined primary button group" fullWidth={true} style={{ marginTop: "10px" }}>
                <Button type='submit' size="large" variant="contained" color="primary" fullWidth={true} style={{ textTransform: "none" }}>Add ingredient</Button>
                <Button type='submit' size="large" variant="contained" color="primary" fullWidth={true} style={{ textTransform: "none" }}>Save recipe</Button>
            </ButtonGroup>

        </form>
    )
}

export default InputForms

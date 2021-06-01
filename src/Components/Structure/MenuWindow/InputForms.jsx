import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import TextField from '@material-ui/core/TextField';
import { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
const InputForms = ({ onAdd, myClick }) => {

    const [recipeName, setRecipeName] = useState('')
    const [recipeDescription, setRecipeDescription] = useState('')
    const [IngredientList, setIngredientList] = useState([])

    const prevIsValid = () => {
        if (IngredientList.length === 0) {
            return true;
        }

        const someEmpty = IngredientList.some(
            (item) => item.ingredientName === '' || item.ingredientUnit === '' || item.ingredientQuantity === '');


        if (someEmpty) {
            IngredientList.map((time, index) => {
                const allPrev = [...IngredientList];

                if (IngredientList[index].ingredientName === "") {
                    allPrev[index].errors.ingredientName = "Ingredient's name is required";
                }

                if (IngredientList[index].ingredientQuantity === "") {
                    allPrev[index].errors.ingredientQuantity = "Ingredient's quantity is required";
                }

                if (IngredientList[index].ingredientUnit === "") {
                    allPrev[index].errors.ingredientUnit = "Ingredient's unit is required";
                }

                setIngredientList(allPrev);
            })
        }
        return !someEmpty;
    };

    const onSubmit = (e) => {
        e.preventDefault()

        if (!recipeName || !recipeDescription || (IngredientList.length <= 0)) {
            alert('Please fill all the inputs and add ingredients')
            return
        }
        let IngredientListFiltered = IngredientList.map(function (item) {
            delete item.errors;
            return item
        });
        myClick(false)
        onAdd({ recipeName, recipeDescription, IngredientListFiltered })
        alert('The recipe has been added!')
    }

    const handleAddIngredient = (e) => {
        e.preventDefault();
        const inputState = {
            ingredientName: "",
            ingredientQuantity: "",
            ingredientUnit: "",

            errors: {
                ingredientName: null,
                ingredientQuantity: null,
                ingredientUnit: null,
            }
        };
        if (prevIsValid()) {
            setIngredientList((prev) => [...prev, inputState]);
        }
    }
    const onChangeIngredient = (index, event) => {
        event.preventDefault();
        event.persist();

        setIngredientList(prev => {
            return prev.map((item, i) => {
                if (i !== index) {
                    return item;
                }
                return {
                    ...item,
                    [event.target.name]: event.target.value,

                    errors: {

                        ...item.errors,
                        [event.target.name]:
                            event.target.value.length > 0
                                ? null : [event.target.name] + "Is required",
                    },
                };
            });
        });
    };
    const handleRemoveIngredient = (e, index) => {
        e.preventDefault();
        setIngredientList((prev) => prev.filter((item) => item !== prev[index]));
    }

    return (
        <>
            <form onSubmit={onSubmit} id="Recipe" className="WordWrap">
                <Grid container className="scrollbar " id="style-4" >
                    <TextField
                        id="outlined-full-width"
                        label="Name"
                        placeholder="e.g Kebab"
                        helperText="Enter recipe's name"
                        fullWidth={true}
                        margin="normal"
                        className="paragraph"
                        required
                        value={recipeName}
                        onChange={(e) => setRecipeName(e.target.value)}
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        className="paragraph"
                        rows={4}
                        placeholder="e.g Some ingredients"
                        variant="outlined"
                        helperText="Enter recipe's description"
                        fullWidth={true}
                        value={recipeDescription}
                        onChange={(e) => setRecipeDescription(e.target.value)}
                        required
                    />
                </Grid >

                {/* {JSON.stringify(IngredientList)} */}


                <div id="Ingredient">
                    {
                        IngredientList.map((item, index) => (
                            <Grid key={`item-${index}`} container style={{ marginTop: "20px" }} alignItems="center" className="paragraph" justify="center" direction="row" spacing={5} wrap="wrap">
                                <Grid item xs={1} align="center" >
                                    #{index + 1}


                                </Grid>
                                <Grid item xs>
                                    <TextField
                                        required
                                        label="Name"
                                        placeholder="e.g Meat"
                                        className="paragraph"
                                        variant="outlined"
                                        name="ingredientName"
                                        error={item.errors.ingredientName ? true : false}

                                        value={item.ingredientName}
                                        onChange={(e) => onChangeIngredient(index, e)}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs >
                                    <TextField
                                        label="Quantity"
                                        type="number"
                                        placeholder="e.g 10"
                                        className="paragraph"
                                        variant="outlined"
                                        inputProps={{ min: "0.01", step: "0.01" }}
                                        error={item.errors.ingredientQuantity ? true : false}

                                        required
                                        name="ingredientQuantity"
                                        className={
                                            item.errors.ingredientQuantity
                                        }
                                        value={item.ingredientQuantity}
                                        className="paragraph"
                                        onChange={(e) => onChangeIngredient(index, e)}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}

                                    />
                                </Grid>
                                <Grid item xs >
                                    <TextField
                                        required
                                        label="Unit"
                                        placeholder="e.g Kg"
                                        variant="outlined"
                                        name="ingredientUnit"
                                        className="paragraph"
                                        error={item.errors.ingredientUnit ? true : false}

                                        className={
                                            item.errors.ingredientUnit
                                        }
                                        value={item.ingredientUnit}
                                        onChange={(e) => onChangeIngredient(index, e)}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item >
                                    <IconButton aria-label="delete" color="primary" onClick={(e) => handleRemoveIngredient(e, index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>

                        ))
                    }

                </div>

                <ButtonGroup color="primary" aria-label="outlined primary button group" fullWidth={true} style={{ marginTop: "10px" }}>
                    <Button onClick={handleAddIngredient} type="submit" form="Ingredient" size="large" variant="contained" color="primary" fullWidth={true} style={{ textTransform: "none" }}>Add ingredient</Button>
                    <Button type="submit" form="Recipe" size="large" variant="contained" color="primary" fullWidth={true} style={{ textTransform: "none" }}>Save recipe</Button>
                </ButtonGroup>


            </form >

        </>
    )
}

export default InputForms
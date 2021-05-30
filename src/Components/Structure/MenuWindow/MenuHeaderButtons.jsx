import React from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
const MenuHeaderButtons = () => {
    return (
        <Grid container alignContent="center" justify="center" className="MenuHeaderButtonsMarginBot">
            <ButtonGroup size="large" aria-label="small button group" variant="contained" fullWidth={true} color="primary">
                <Button style={{ textTransform: "none" }} endIcon={<CloudDownloadOutlinedIcon />}>Load</Button>
                <Button style={{ textTransform: "none" }} endIcon={<CloudUploadOutlinedIcon />}>Save </Button>
                <Button style={{ textTransform: "none" }} endIcon={<ShoppingCartOutlinedIcon />}>Shopping </Button>
            </ButtonGroup>
        </Grid>
    )
}
export default MenuHeaderButtons

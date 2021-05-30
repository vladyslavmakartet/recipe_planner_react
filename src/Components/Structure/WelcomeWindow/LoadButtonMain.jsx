import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
const LoadButtonMain = ({ onLoad}) => {

    return (

        <Button style={{ textTransform: "none" }} onClick={onLoad} className="tooltip myBtn" size="large" variant="contained">Load<span className="tooltiptext">Load recipes from the server.</span></Button>


    )
}
LoadButtonMain.propTypes = {
    onClick: PropTypes.func,
}
export default LoadButtonMain

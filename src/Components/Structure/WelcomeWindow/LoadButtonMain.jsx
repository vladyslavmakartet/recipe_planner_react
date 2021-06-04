import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
const LoadButtonMain = ({ onLoad }) => {

    return (
        <Tooltip title="Load last recipes from the server.">
            <Button style={{ textTransform: "none" }} onClick={onLoad}  className="tooltip myBtn" size="large" variant="contained">Load
            </Button>
        </Tooltip>

    )
}
LoadButtonMain.propTypes = {
    onClick: PropTypes.func,
}
export default LoadButtonMain

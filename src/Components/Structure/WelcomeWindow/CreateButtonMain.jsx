import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
const CreateButtonMain = ({ onCreate }) => {
    return (
        //  findDOMNode caused by tooltip 
        <Tooltip title="Create recipes.">
        <Button style={{ textTransform: "none" }}onClick={onCreate}className=" myBtn"size="large"variant="contained"> 
            Creat
            {/* <span className="tooltiptext"style={{ top: "0px", left: "105%" }}>Create recipes.</span> */}
        </Button>
        </Tooltip>

    )
}
CreateButtonMain.propTypes = {
    onClick: PropTypes.func,
}
export default CreateButtonMain

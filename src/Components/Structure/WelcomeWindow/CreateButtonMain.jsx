import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
const CreateButtonMain = ({ onCreate }) => {
    return (

        <Tooltip title="Create recipes. (Caution: you may overwrite already existing recipes on the server)">
        <Button style={{ textTransform: "none" }}onClick={onCreate}className=" myBtn"size="large"variant="contained"> 
            Creat
        </Button>
        </Tooltip>

    )
}
CreateButtonMain.propTypes = {
    onClick: PropTypes.func,
}
export default CreateButtonMain

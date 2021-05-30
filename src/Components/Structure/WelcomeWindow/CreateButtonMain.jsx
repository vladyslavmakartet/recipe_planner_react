import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
const CreateButtonMain = ({onCreate}) => {

    // const onCreate = () => {
    //     console.log("HelloFrom create")
    // }


    return (
            <Button style={{ textTransform: "none" }} onClick={onCreate}  className="tooltip myBtn" size="large" variant="contained">Creat<span className="tooltiptext" style={{ top: "0px", left: "105%" }}>Create recipes.</span></Button> 

    )
}
CreateButtonMain.propTypes = {
    onClick: PropTypes.func,
}
export default CreateButtonMain

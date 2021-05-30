import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
const ButtonsMain = ({}) => {
    // const onClick = (Value) => {
    //     console.log(Value)
    // }
    const onButton = (Value) => {
        console.log(Value)
    }


    return (
        <div className="btn">
            {/* <Button style={{ textTransform: "none" }} onClick={() => onClick('Hello')}  className="tooltip myBtn" size="large" variant="contained">Creat<span className="tooltiptext" style={{ top: "0px", left: "105%" }}>Create recipes.</span></Button> */}
            <Button style={{ textTransform: "none" }} onClick={() => onButton('Hello1')}  className="tooltip myBtn" size="large" variant="contained">Creat<span className="tooltiptext" style={{ top: "0px", left: "105%" }}>Create recipes.</span></Button> 
            <Button style={{ textTransform: "none" }} onClick={() => onButton('Hello2')}  className="tooltip myBtn" size="large" variant="contained">Load<span className="tooltiptext">Load recipes from the server.</span></Button>
        </div>

    )
}
ButtonsMain.propTypes = {
    onClick: PropTypes.func,
}
export default ButtonsMain

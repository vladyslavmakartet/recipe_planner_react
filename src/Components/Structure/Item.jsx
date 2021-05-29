import React from 'react';
import { Paper, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
export function Item(props) {

    return (
        // <Paper   className={classes.root} square={false}>
        // </Paper>
        <div>
            <img src={`/img/${props.item.name}.jpg`} />
            <div className="aaaa">
                <p className="bbbb" >{props.item.description}</p>
            </div>
        </div>
    )
}
//export function Item();
import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
const WelcomeMessage = () => {
    return (
        <Grid container justify="center" direction="column">

            {/* There is already an h1 in the page, let's not duplicate it. */}
            <Grid item>
                <Typography variant="h1" component="h2" align="center">
                    Welcome!
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="subtitle1" component="h2" align="center">
                    Please select any available recipe or press any button
                </Typography>
            </Grid>
        </Grid>
    )
}

export default WelcomeMessage

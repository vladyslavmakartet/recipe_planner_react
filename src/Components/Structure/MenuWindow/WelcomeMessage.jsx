import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
const WelcomeMessage = () => {
    return (
        <Grid container spacing={0}
            className="threeD paragraph"
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '40vh' }}>
            <Grid item xs={12} className="WordWrap">
                <Typography variant="h1" component="h2" align="center">
                    Welcome!
            </Typography>
            </Grid>
            <Grid item xs={12} className="WordWrap">
                <Typography variant="subtitle1" component="h2" align="center">
                    Please select any available recipe or press any button
            </Typography>
            </Grid>
        </Grid>
    )
}

export default WelcomeMessage
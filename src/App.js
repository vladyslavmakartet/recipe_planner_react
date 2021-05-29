import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { CarouselMain } from './Components/Structure/CarouselMain.jsx';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup';

function App() {
  return (
    <div className="App" >
      <Container fullWidth={true} className="container">
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid
            item
            direction="column"
          >
            <CarouselMain />
          </Grid>
          <Grid

            item
            direction="column"
          >
            {/* <Grid container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={4}
              width="100%"
            >

               <Grid item>
                <Button size="large" variant="contained" color="secondary">Creat</Button>
              </Grid>
              <Grid item>
                <Button size="large" variant="contained" color="secondary">Upload</Button>
              </Grid> 
              <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical contained primary button group"
                variant="contained"
                size="large"
                >
                  <Button size="large" variant="contained" color="secondary">Creat</Button>
                  <Button size="large" variant="contained" color="secondary">Upload</Button>
              </ButtonGroup>
            </Grid> */}
            <div className="btn">

              {/* <div class="tooltip">Hover over me
                <span class="tooltiptext">Tooltip text</span>
              </div> */}


              <Button style={{textTransform: "none"}} className="tooltip" size="large" variant="contained" color="#969696">Creat<span class="tooltiptext">Create recipes.</span></Button>
              <Button style={{textTransform: "none"}} className="tooltip" size="large" variant="contained" color="#969696">Load<span class="tooltiptext">Load recipes from the server.</span></Button>

            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { CarouselMain } from './Components/Structure/WelcomeWindow/CarouselMain.jsx';
import CreateButtonMain from './Components/Structure/WelcomeWindow/CreateButtonMain';
import LoadButtonMain from './Components/Structure/WelcomeWindow/LoadButtonMain';
import { useState } from 'react'
import Menu from './Components/Structure/MenuWindow/Menu'

function App() {
  const [showCreateRecipe, setShowCreateRecipe] = useState(true)
  const [loadFromServer, setLoadFromServer] = useState(false)
  return (
    <div className="App" >
      <Container className="container">
        {showCreateRecipe && <Grid container direction="row" justify="space-evenly" alignItems="center">
          <Grid item >
            <CarouselMain />
          </Grid>
          <Grid item >
            <div className="btn">
              <CreateButtonMain onCreate={() => setShowCreateRecipe(!showCreateRecipe)} />
              <LoadButtonMain onLoad={() => {setShowCreateRecipe(!showCreateRecipe), setLoadFromServer(!loadFromServer)}}/>
            </div>
          </Grid>
        </Grid>}
        {showCreateRecipe ? <></> : <Menu loadFromServer={loadFromServer}/> }

      </Container>
    </div>
  );
}

export default App;

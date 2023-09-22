import React from 'react'
import LinkMaterial from '@material-ui/core/Link';
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as Logo } from '../img/pic.svg';
const About = () => {
    return (
        <Container className="container">
            <Grid container className="scrollbar " id="style-2" spacing={3} direction="column" >
                <Grid item align="center" >
                    <Logo />
                </Grid>
                <Grid item className="paragraphRecipe">
                    <div className="title">Recipe Planner</div>
                    <p><b>Recipe Planner</b> - is a web application written with the help of a JavaScript library for building user interfaces - React. </p>
                    <p>With this web app, you can create recipes and perform calculations of each ingredient you need to buy to cook a meal (available in the Shopping section). </p>
                    <p>The program allows to view and edit each recipe created as well as ingredients belonging to a certain recipe.</p>
                    <p>Additionally, it is possible to load and automatically save created recipes on the server.</p>
                    <p>The app uses a source-available cross-platform document-oriented database program MongoDB, a cloud platform as a service <s>Heroku</s> Cyclic and is hosted on Netlify.</p>
                    <p>The web application is one of the assignments for the EGUI course at <LinkMaterial  href="https://www.pw.edu.pl/engpw">Warsaw University of Technology</LinkMaterial>.</p>
                    <h1 className="title text-left">Tools used</h1>
                    <ul className="list">
                        <li>Microsoft Visual Studio Code Version 1.81.1</li>
                        <li>Node.js Version 18.18.0</li>
                        <li>React Version</li>
                        <li>Material-UI Version</li>
                        <li>MongoDB</li>
                        <li><s>Heroku</s> Cyclic</li>
                        <li>Netlify </li>
                    </ul>
                    <Link to='/'> Go Back</Link>
                </Grid>
            </Grid>

        </Container>
    )
}

export default About

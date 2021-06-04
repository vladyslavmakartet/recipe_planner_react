import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LinkMaterial from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        
            <Container maxWidth={false} className="footer" >
                <Link to='/about' style={{ color: 'white' }}>About</Link>
                <div className="text">&copy; {new Date().getFullYear()} Vladyslav Makartet</div>

                <LinkMaterial href="https://www.linkedin.com/in/vladyslav-makartet-4712ba196/"><LinkedInIcon style={{ color: 'white' }} /></LinkMaterial>
                <LinkMaterial href="https://github.com/vladyslavmakartet"><GitHubIcon style={{ color: 'white' }} /></LinkMaterial>

            </Container>
        
    )

}

export default Footer
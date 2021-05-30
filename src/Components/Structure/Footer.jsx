import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {

    return (

        <Container maxWidth={false} className="footer" >
            <Link style={{ color: 'white' }}>About</Link>
            <div className="text">&copy; {new Date().getFullYear()} Vladyslav Makartet</div>

            <Link href="https://www.linkedin.com/in/vladyslav-makartet-4712ba196/"><LinkedInIcon style={{ color: 'white' }} /></Link>
            <Link href="https://github.com/vladyslavmakartet"><GitHubIcon style={{ color: 'white' }} /></Link>


        </Container>

    )
}

export default Footer
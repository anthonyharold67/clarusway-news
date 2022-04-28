import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {useStyles} from './FooterStyles';


const Footer = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <Grid container alignItems="center">
                <Grid item xs={12} sm={12}>
                    <Box style={{display: 'flex', justifyContent: 'center'}}>
                        <Box> <a href="https://github.com/anthonyharold67" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <GitHubIcon className={classes.icon} /> </a> </Box>
                        <Box> <a href="https://www.linkedin.com/in/anthony-harold-67-fs" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <LinkedInIcon className={classes.icon} /> </a> </Box>
                        <Box>  <InstagramIcon className={classes.icon} /> </Box>
                        <Box> <TwitterIcon className={classes.icon}/> </Box>
                    </Box>
                </Grid>
                <Grid item sm={1}></Grid>
            </Grid>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12}>
                    <p className={classes.footer__copyRight}>Developed by Anthony Harold <small>Copyright © {new Date().getFullYear()}</small> </p>
                </Grid>
            </Grid>
    </div>
  )
}

export default Footer


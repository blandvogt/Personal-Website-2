import React, { useState, useContext } from "react";
import SEO from "../components/seo";
import { Grid, Typography, SwipeableDrawer, IconButton, Link, Button } from '@material-ui/core';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import './index.css';
import DrawItems from '../components/DrawerItems';
import MenuIcon from '@material-ui/icons/Menu';
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import { GlobalState, GlobalDispatch } from '../Context/GlobalContext';
import oculus from '../images/backgrounds/oculus.jpg';
import mountain1 from '../images/backgrounds/mountain1.jpg';

const IndexPage = ({ data }) => {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => setDrawer(!drawer);
  const darkMode = useContext(GlobalState).darkMode;

  return (
    <div style={darkMode ? {backgroundImage: `url(${mountain1})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '100%',
    width: '100%',
    height: 'auto',
    position: 'fixed',
    top: '0',
    left: '0'} : 
    {backgroundImage: `url(${oculus})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '100%',
    width: '100%',
    height: 'auto',
    position: 'fixed',
    top: '0',
    left: '0'}}>

      <SEO title="Home" />
      <IconButton style={{margin: '1rem'}} edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
        <MenuIcon fontSize='large' style={darkMode ? {color: 'white'} : {color: 'black'}}/>
      </IconButton>

      <SwipeableDrawer open={drawer} onClose={toggleDrawer} onOpen={() => { }}>
        <div style={darkMode ? { height: '100%', backgroundColor: '#1f1e1e', color: 'white' } : {}}><DrawItems /></div>
      </SwipeableDrawer>

      <Button onClick={useContext(GlobalDispatch)}
        style={darkMode ? {color: 'white', float: 'right', marginTop: '1.5rem', marginRight: '1rem'} : 
        {color: 'black', float: 'right', marginTop: '1.5rem', marginRight: '1rem'}}>
        <EmojiObjectsOutlinedIcon />
      </Button>

      <Grid container spacing={0} style={{ marginTop: '5%' }}>
        <Grid item md={5} sm={12} xs={12}>
          <Img className='imgBrian' fluid={data.Brian.childImageSharp.fluid} />
        </Grid>
        <Grid item md={7} sm={12} className='grid'>
          <h1 className='titleName'><strong>BRIAN</strong></h1>
          <h1 className='titleName'><strong>LANDVOGT</strong></h1>

          <div className='titleRole' style={darkMode ? { color: '#c7f5ff' } : { color: '#3090b0' }}>
            Full-Stack Software Engineer
          </div>
          <div className='container' style={{marginBottom: '3rem'}}>
            <div style={darkMode ? { color: 'white' } : { color: 'black' }} className='bodyText'>
              <Typography style={{ fontSize: '1.1rem' }} variant='subtitle1'>
                Welcome to my website! Here you can learn all about my personal interests
                and professional experiences. Take some time to look everything over, and
                don't forget to connect with me on
                <span>
                  <span> </span>
                  <Link rel="noopener" style={darkMode ? { color: 'grey' } : { color: 'grey' }}
                    href="https://www.linkedin.com/in/brianlandvogt/">LinkedIn</Link>
                </span>.
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default IndexPage;
export const query = graphql`
  query {
    Brian: file(relativePath: {eq: "brian.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
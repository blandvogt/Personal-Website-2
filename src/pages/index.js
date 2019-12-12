import React, { useState, useContext } from "react";
import SEO from "../components/seo";
import { Grid, Typography, SwipeableDrawer, IconButton, makeStyles, Link, Button } from '@material-ui/core';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import './index.css';
import DrawItems from '../components/DrawerItems';
import MenuIcon from '@material-ui/icons/Menu';
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import { GlobalState, GlobalDispatch } from '../Context/GlobalContext';

const IndexPage = ({ data }) => {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => setDrawer(!drawer);
  const { menuButton, darkModeBtn } = useStyles();
  const darkMode = useContext(GlobalState).darkMode;

  return (
    <div className={darkMode ? 'mountainBG' : 'oculusBG'}>
      <SEO title="Home" />
      <IconButton className={menuButton} edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
        <MenuIcon fontSize='large' style={darkMode ? {color: 'white'} : {color: 'black'}}/>
      </IconButton>

      <SwipeableDrawer open={drawer} onClose={toggleDrawer} onOpen={() => { }}>
        <div style={darkMode ? { height: '100%', backgroundColor: '#1f1e1e', color: 'white' } : {}}><DrawItems /></div>
      </SwipeableDrawer>

      <Button className={darkModeBtn} onClick={useContext(GlobalDispatch)}
        style={darkMode ? { color: 'white' } : { color: 'black' }}>
        <EmojiObjectsOutlinedIcon />
      </Button>

      <Grid container spacing={0} style={{ marginTop: '5%' }}>
        <Grid item md={5} sm={12} xs={12}>
          <Img durationFadeIn={1500} className='imgBrian' fluid={data.Brian.childImageSharp.fluid} />
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

const useStyles = makeStyles(theme => ({
  menuButton: {
    margin: theme.spacing(2),
    marginLeft: '30px'
  },
  darkModeBtn: {
    margin: theme.spacing(2),
    float: 'right',
    marginRight: '30px',
    marginTop: '1.5rem'
  }
}));

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
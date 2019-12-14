import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, SwipeableDrawer, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import PropTypes from "prop-types";
import DrawItems from './DrawerItems';
import { GlobalState, GlobalDispatch } from '../Context/GlobalContext';
import './header.css';

const Header = props => {
  const [ drawer, setDrawer ] = useState(false);
  const darkMode = useContext(GlobalState).darkMode;

  return (
      <AppBar style={darkMode ? {backgroundColor: '#2f3d4a'} : {backgroundColor: '#576F84'}} position="static">
        <Toolbar>
          <IconButton style={{marginRight: '1rem'}} color="inherit" aria-label="menu" onClick={() => setDrawer(!drawer)}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6"> {props.headerTitle} </Typography>
          
          <SwipeableDrawer open={drawer} onClose={() => setDrawer(!drawer)} onOpen={() => {}}>
            <div style={darkMode ? {height: '100%', backgroundColor: '#1f1e1e', color: 'white'} : {}}><DrawItems/></div>
          </SwipeableDrawer>

          <Grid container spacing={1}><Grid item xs={12}>
            <Button aria-label="Dark Mode" style={darkMode ? {color: 'white', float: 'right'} : {color: 'black', float: 'right'}} 
              onClick={useContext(GlobalDispatch)}>
                <EmojiObjectsOutlinedIcon/> 
            </Button>
          </Grid></Grid>
        </Toolbar>
      </AppBar>
  );
};

Header.propTypes = {
  headerTitle: PropTypes.string,
}

Header.defaultProps = {
  headerTitle: ``,
}

export default Header;
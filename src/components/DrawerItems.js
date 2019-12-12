import React, { useContext } from 'react';
import { makeStyles, ListItemText, ListItem, List, Typography } from '@material-ui/core';
import { Link } from "gatsby";
import { GlobalState } from "../Context/GlobalContext";

const DrawerItems = () => {
    const { homeTitle, list } = useStyles();
    const darkMode = useContext(GlobalState).darkMode;
    const path = window.location.pathname;

    return (
        <>
            <Link to='/' className='link'>
                <Typography style={darkMode ? {color: '#0e7d99'} : {}} className={homeTitle} variant="h5"> 
                    Brian Landvogt 
                </Typography>
            </Link>
            <hr style={{backgroundColor: 'black'}}/>
            <List className={list}>
                <Link to='/About' className='link'>
                    <ListItem button selected={path === '/About'}>
                        <ListItemText style={darkMode ? {color: 'white'} : {}} primary='About'/>
                    </ListItem>
                </Link>
                
                <Link to='/Skills' className='link'>
                    <ListItem button selected={path === '/Skills'}>
                        <ListItemText style={darkMode ? {color: 'white'} : {}} primary='Skills'/>
                    </ListItem>
                </Link>
                <Link to='/Experience' className='link'>
                    <ListItem button selected={path === '/Experience'}>
                        <ListItemText style={darkMode ? {color: 'white'} : {}} primary='Experience'/>
                    </ListItem>
                </Link>
                <Link to='/Projects' className='link'>
                    <ListItem button selected={path === '/Projects'}>
                        <ListItemText style={darkMode ? {color: 'white'} : {}} primary='Projects'/>
                    </ListItem>
                </Link>
                <Link to='/Website' className='link'>
                    <ListItem button selected={path === '/Website'}>
                        <ListItemText style={darkMode ? {color: 'white'} : {}} primary='Website Info'/>
                    </ListItem>
                </Link>
            </List>
        </>
    );
}

const useStyles = makeStyles(() => ({
    list: {
        width: 250,
    },
    homeTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        margin: '15px'
    }
}));

export default DrawerItems;
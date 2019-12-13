import React, { useContext } from "react";
import { makeStyles } from '@material-ui/core';
import PropTypes from "prop-types";
import Header from "./header";
import "./layout.css";
import { GlobalState } from "../Context/GlobalContext";
import Helmet from 'react-helmet';

const Layout = ({ children, headerTitle }) => {
  const { bodyClass, bodyClassDark } = useStyles();
  const darkMode = useContext(GlobalState).darkMode;

  return (
    <>
      <Helmet><body className={darkMode ? bodyClassDark : bodyClass }/></Helmet>
      <Header headerTitle={headerTitle}/>
      <div style={darkMode ? 
        {backgroundColor: '#383838', color: 'white', height: '100%', margin: '0', backgroundSize: '100%'} : 
        {backgroundColor: '#f7f7f7', height: '100%', margin: '0', backgroundSize: '100%'}}>
          <main>{children}</main>
      </div>
    </>
  )
}

const useStyles = makeStyles(() => ({
  bodyClass: {
    margin: '0',
    height: '100%',
    webkitFontSmoothing: 'antialiased',
    mozOsxFontSmoothing: 'grayscale',
    backgroundColor: '#f7f7f7'
  },
  
  bodyClassDark: {
    margin: '0',
    height: '100%',
    webkitFontSmoothing: 'antialiased',
    mozOsxFontSmoothing: 'grayscale',
    backgroundColor: '#383838',
    color: 'white'
  }
}));

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
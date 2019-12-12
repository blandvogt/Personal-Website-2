/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

//const React = require("react");
//const GlobalContext = require("./src/Context/GlobalContext");
import React from 'react';
import GlobalContext from './src/Context/GlobalContext';

export const wrapRootElement = ({ element }) => <GlobalContext>{element}</GlobalContext>;
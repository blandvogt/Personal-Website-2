module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-transition-link/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#ffffff","display":"minimal-ui","icon":"src/images/meSuit.png"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]

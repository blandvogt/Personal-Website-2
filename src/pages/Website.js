import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container } from '@material-ui/core';
import CardGrid from "../components/CardGrid";

import gatsby from '../images/gatsby-icon.png';
import superImage from '../images/superImage.webp';
import material from '../images/material.webp';
import black from '../images/black.webp';
import chart from '../images/chart1.jpg';
import react from '../images/react.png';
import host from '../images/super.jpg';

const Website = () => {
  const items = [{
    image: react,
    title: 'Positive Reaction',
    body: `This site was build using the React.js library. With a declarative syntax, React allows me 
          to build stateful, reusable components. For example, the Skills and Projects pages are build 
          with the exact same custom component, re-purposed with different state data.`,
    link: 'https://reactjs.org/'
  },{
    image: gatsby,
    title: 'Great Gatsby',
    body: `Gatsby is a React static site generator that forms this website's foundation and 
          allows for extreamly fast build times. In other words, instead of building the 
          site from scratch every time it's accessed, Gatsby pre-builds the site into 
          static files that sit ready to go on the server.`,
    link: 'https://www.gatsbyjs.org/'
  }, {
    image: material,
    title: 'Modern UI',
    body: `The MaterialUI library serves as the front-end framework used to design the majority of this 
          site's user interface. As coinded by Google, MaterialUI implements a UI technique known as 
          Material Design. It helps provide a consistent and quality theme for the entire site.`,
    link: 'https://material-ui.com/'
  }, {
    image: superImage,
    title: 'Super Images',
    body: `Gatsby-Image is one of the many great plugins built for Gatsby and is 
          used to manage this site's media content. It uses GrpahQL to lazy-loaded asynchronous WebP images.
          It even creates a low quality SVG on initial load to simulate the feel of an instant render.`,
    link: 'https://www.gatsbyjs.org/packages/gatsby-image/'
  }, {
    image: black,
    title: 'Dark Mode',
    body: `The useReducer and useContext React Hooks are used to build a global state throughout this site. 
          This means that a change on one page can lead to changes on every page. Clicking the lightbulb 
          in the upper right corner dispatches a state through the central store and to the rest of the app.`,
    link: 'https://reactjs.org/docs/hooks-reference.html#usereducer'
  }, {
    image: chart,
    title: 'Stunning Charts',
    body: `Each chart on the Skills page was built using the React-ChartJS-2 library, a wrapper of Chart.js. 
          While the data needed for this site isn't all that complex, React Charts allows me to easily 
          create beautifully designed charts that both look and feel dynamic.`,
    link: 'https://github.com/jerairrest/react-chartjs-2'
  }, {
    image: host,
    title: 'Hosting Hero',
    body: `This site uses Netlify for continuous deployment. Once all of my code 
          has been written, I deploy it to GitHub. Then, Netlify automatically grabs that content, compiles it into 
          static files, and pushes it to the server. Netlify is perfect for JAM stack applications and even provides HTTPS.`,
    link: 'https://www.netlify.com/'
  }]

  return (
    <Layout headerTitle='Website'>
      <SEO title="Site Info" />
      <Container maxWidth={'xl'} style={{ padding: '1.2rem 1rem' }}>
        <CardGrid items={items}/>
      </Container>
    </Layout>
  )
}

export default Website;
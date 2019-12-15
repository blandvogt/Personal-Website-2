import React, { useContext } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Typography, Paper, Grid, Link } from '@material-ui/core';
import CardGrid from "../components/CardGrid";
import { GlobalState } from "../Context/GlobalContext";
import Img from 'gatsby-image';



const Website = ({ data }) => {
  const darkMode = useContext(GlobalState).darkMode;
  const items = [{
    image: data.react.childImageSharp.fluid,
    title: 'Positive Reaction',
    body: `This site was build using the React.js library. With a declarative syntax, React allows me 
          to build stateful, reusable components. For example, the Skills and Projects pages are build 
          with the exact same custom component, re-purposed with different state data.`,
    link: 'https://reactjs.org/'
  },{
    image: data.gatsby.childImageSharp.fluid,
    title: 'Great Gatsby',
    body: `Gatsby is a React static site generator that forms this website's foundation and 
          allows for extreamly fast build times. In other words, instead of building the 
          site from scratch every time it's accessed, Gatsby pre-builds the site into 
          static files that sit ready to go on the server.`,
    link: 'https://www.gatsbyjs.org/'
  }, {
    image: data.material.childImageSharp.fluid,
    title: 'Modern UI',
    body: `The MaterialUI library serves as the front-end framework used to design the majority of this 
          site's user interface. As coinded by Google, MaterialUI implements a UI technique known as 
          Material Design. It helps provide a consistent and quality theme for the entire site.`,
    link: 'https://material-ui.com/'
  }, {
    image: data.superImage.childImageSharp.fluid,
    title: 'Super Images',
    body: `Gatsby-Image is one of the many great plugins built for Gatsby and is 
          used to manage this site's media content. It uses GrpahQL to lazy-load asynchronous WebP images.
          It even creates a low quality SVG on initial load to simulate the feel of an instant render.`,
    link: 'https://www.gatsbyjs.org/packages/gatsby-image/'
  }, {
    image: data.black.childImageSharp.fluid,
    title: 'Dark Mode',
    body: `The useReducer and useContext React Hooks are used to build a global state throughout this site. 
          This means that a change on one page can lead to changes on every page. Clicking the lightbulb 
          in the upper right corner dispatches a state through the central store and to the rest of the app.`,
    link: 'https://reactjs.org/docs/hooks-reference.html#usereducer'
  }, {
    image: data.chart.childImageSharp.fluid,
    title: 'Stunning Charts',
    body: `Each chart on the Skills page was built using the React-ChartJS-2 library, a wrapper of Chart.js. 
          While the data needed for this site isn't all that complex, React Charts allows me to easily 
          create beautifully designed charts that both look and feel dynamic.`,
    link: 'https://github.com/jerairrest/react-chartjs-2'
  }, {
    image: data.host.childImageSharp.fluid,
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
            <Paper style={darkMode ? {backgroundColor: '#2e2e2e', color: 'white', padding: '1.2rem', marginBottom: '2rem'} :
                {backgroundColor: 'white', color: 'black', padding: '1.2rem', marginBottom: '2rem'}}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={10}>
                    <Typography variant={'body2'} >  
                      As of 2019, this website uses some of the latest and most advanced technology in web development. 
                      Ok, that might be a bit of hyperbole and is certainly a statement difficult to backup even 
                      a couple months from now. Still, I'm very proud of what BrianLandvogt.com 
                      is capable of. Whether you're interested in creating a similar web experience, or if you're just curious,
                      this page is meant to give insight into exactly what powers BrinaLandvogt.com.
                    </Typography>
                    <br/>
                    <Typography variant={'body2'}>  
                      As per the accompanying image, Google's Lighthouse tool gives this site perfect scores across the 
                      board when under the ideal conditions. More so, BrianLandvogt.com has earned a coveted Google 
                      Progressive Web Application (PWA) certification. As per Google's <span> </span>
                      <Link style={{color: '#297999'}} href={'https://developers.google.com/web/progressive-web-apps'}>
                        offical definition</Link>
                      , a PWA must be "Reliable", "Fast", and "Engaging" to the highest technical standards. 
                      They represent "user experiences that have the reach of the web". In fact, you can even download 
                      BrianLandvogt.com and use it as a native app on your homescreen.
                    </Typography>
                    <br/>
                    <Typography variant={'body2'}>  
                      The technologies below are each used on this site to varying degrees. Attached is a brief 
                      description of how they are implemented. If you would like to learn more, the attached 
                      link on each card will bring you to their official documentation.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Img fluid={data.lighthouse.childImageSharp.fluid} style={{borderRadius: '5px',
                      padding: '0px'}}/>
                  </Grid>
                </Grid>
            </Paper>
        <CardGrid items={items}/>
      </Container>
    </Layout>
  )
}

export default Website;
export const query = graphql`
    query {
      lighthouse: file(relativePath: {eq: "lighthouse4.png"}) {
        childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
      }
      gatsby: file(relativePath: {eq: "gatsby-icon.png"}) {
          childImageSharp {
              fluid(maxWidth: 750, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
          }
      }
      superImage: file(relativePath: {eq: "image.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 750, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
        }
      }
      material: file(relativePath: {eq: "materialDesign.png"}) {
        childImageSharp {
            fluid(maxWidth: 750, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
        }
      }
      black: file(relativePath: {eq: "dark.jpeg"}) {
        childImageSharp {
            fluid(maxWidth: 750, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
      }
      chart: file(relativePath: {eq: "chart1.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 750, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
      }
      react: file(relativePath: {eq: "reactLogo.png"}) {
        childImageSharp {
            fluid(maxWidth: 750, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
      }
      host: file(relativePath: {eq: "super.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 750, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
      }
    }
`
import React from 'react';
import Layout from '../components/layout';
import { Container, useMediaQuery, useTheme } from '@material-ui/core';
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import SEO from '../components/seo';

import Binder from './Projects/Binder';
import WiMove from './Projects/WiMove';
import DataScience from './Projects/DataScience';
import Website from './Projects/Website';

import Display from '../components/Display';
import Accordion from '../components/Accordion';
import './Projects.css';

const Projects = ({ data }) => {
  const isDesktop = useMediaQuery(useTheme().breakpoints.up('md'));
  const items = [{
      name: 'Binder', 
      content: <><Container style={{marginTop: '1rem'}} maxWidth={'sm'}>
        <Img className='imgStyle' fluid={data.Binder.childImageSharp.fluid}/></Container><Binder/></>
    }, {
      name: 'Wi-Move', 
      content: <><Container style={{marginTop: '1rem'}} maxWidth={'sm'}>
        <Img className='imgStyle' fluid={data.WiMove.childImageSharp.fluid}/></Container><WiMove/></>
    }, {
      name: 'BrianLandvogt.com (v1.0)', 
      content: <><Container style={{marginTop: '1rem'}} maxWidth={'sm'}>
        <Img className='imgStyle' fluid={data.OldWebsite.childImageSharp.fluid}/></Container><Website/></>
    }, {
      name: 'LIU Data Science Team', 
      content: <><Container style={{marginTop: '1rem'}} maxWidth={'sm'}>
        <Img className='imgStyle' fluid={data.DataScienceTeam.childImageSharp.fluid}/></Container><DataScience/></>
  }];
  
  return (
    <Layout headerTitle='Projects'>
      <SEO title='Projects'/>
      <Container maxWidth={'xl'} style={{padding: '1.2rem 1rem'}}>
        {isDesktop ? <Display items={items}/> : <Accordion items={items}/>}
      </Container>
    </Layout>
  )
}

export default Projects;
export const query = graphql`
    query {
      Binder: file(relativePath: {eq: "projects/Binder.png"}) {
          childImageSharp {
              fluid(maxWidth: 50000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
          }
      }
      WiMove: file(relativePath: {eq: "projects/WiMove.png"}) {
        childImageSharp {
            fluid(maxWidth: 50000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
      }
      OldWebsite: file(relativePath: {eq: "projects/OldWebsite.png"}) {
        childImageSharp {
            fluid(maxWidth: 50000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
      }
      DataScienceTeam: file(relativePath: {eq: "projects/DataScienceTeam.png"}) {
        childImageSharp {
            fluid(maxWidth: 50000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
      }
    }
`
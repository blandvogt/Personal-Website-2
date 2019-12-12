import React, { useContext } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Typography, Container, Paper, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import './About.css';
import HighSchool from './AboutText/HighSchool'
import College from "./AboutText/College";
import ClubsAndComps from "./AboutText/ClubsAndComps";
import CSClub from "./AboutText/CSClub";
import Interests1 from "./AboutText/Interests1";
import Interests2 from "./AboutText/Interests2";
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import { GlobalState } from "../Context/GlobalContext";
import Accordion from "../components/Accordion";

const AboutMe = ({ data }) => {
  const darkMode = useContext(GlobalState).darkMode;
  const { paper, paperDark } = useStyle();
  const isDesktop = useMediaQuery(useTheme().breakpoints.up('md'));
  const items = [
    { name: 'High School', content:<HighSchool/> }, 
    { name: 'College', content: <><College/><CSClub/><ClubsAndComps/></> }, 
    { name: 'Interests', content: <>
      <Img fluid={data.meDeer.childImageSharp.fluid}/><Interests1/>
      <Img fluid={data.books.childImageSharp.fluid}/><Interests2/></>
  }];

  return (
    <Layout headerTitle='About'>
      <SEO title="About" />
      <Container maxWidth='xl' style={{padding: '2% 5%'}}>
        {isDesktop ? 
        <><Paper className={darkMode ? paperDark : paper}>
            <Typography variant="h5" style={{color: '#0e7d99'}}><strong>Academic Background</strong></Typography>
            <Img className='imgRight' fluid={data.meJapan1.childImageSharp.fluid}/>
            <Typography variant="subtitle1"><strong>High School (2010 - 2014)</strong></Typography>
            <HighSchool/>
            <Typography variant="subtitle1"><strong>College (2014 - 2017)</strong></Typography>
            <College/>
            <CSClub/>
            <ClubsAndComps/>
          </Paper> 
          <br/>
          <Paper className={darkMode ? paperDark : paper}>
            <Typography variant="h5" style={{color: '#0e7d99'}}><strong>Interests and Activities</strong></Typography>
            <Img className='imgRight' fluid={data.books.childImageSharp.fluid}/>
            <Interests1/>
            <Img className='imgLeft' fluid={data.meDeer.childImageSharp.fluid}/>
            <Interests2/>
        </Paper> </>
        : <><Img style={{marginBottom: '1.2rem'}} fluid={data.meJapan1.childImageSharp.fluid}/><Accordion items={items}/></>}
      </Container>
    </Layout>
  )
}

const useStyle = makeStyles(() => ({
  paper: {
    padding: '1.5rem 2.2rem'
  },
  paperDark: {
    padding: '1.5rem 2.2rem',
    backgroundColor: '#4d4d4d', 
    color: 'white'
  }
}));

export default AboutMe;
export const query = graphql`
    query {
      meDeer: file(relativePath: {eq: "meDeer.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 50000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
      }
      books: file(relativePath: {eq: "books.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 50000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
      }
      meJapan1: file(relativePath: {eq: "meJapan1.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 50000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
      }
    }
`

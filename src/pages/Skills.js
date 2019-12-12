import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Display from '../components/Display';
import Accordion from '../components/Accordion';
import { Container, useMediaQuery, useTheme } from '@material-ui/core';
import Overview from './Skills/Overview';
import FrontEnd from './Skills/FrontEnd';
import BackEnd from './Skills/BackEnd';
import ReactTools from './Skills/ReactTools';
import Salesforce from './Skills/Salesforce';
import Other from './Skills/Other';

const Skills = () => {
  const desktop = useMediaQuery(useTheme().breakpoints.up('md'));
  const items = [{
      name: 'Overview', 
      content: <Overview/>
    }, {
      name: 'Front-End', 
      content: <FrontEnd/>
    }, {
      name: 'Back-End', 
      content: <BackEnd/>
    } , {
      name: 'React', 
      content: <ReactTools/>
    }, {
      name: 'Salesforce', 
      content: <Salesforce/>
    }, {
      name: 'Other', 
      content: <Other/>
  }];

  return (
    <Layout headerTitle='Skills'>
      <SEO title="Skill Set" />
      <Container maxWidth={'xl'} style={{padding: '1.2rem 1rem'}}>
        {desktop ? <Display items={items}/> : <Accordion items={items}/>}
      </Container>
    </Layout>
  )
}

export default Skills;
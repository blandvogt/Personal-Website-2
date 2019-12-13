import React, { useContext } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Grid, Card, Typography, Container, Paper } from '@material-ui/core';
import './Experience.css';
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import { GlobalState } from "../Context/GlobalContext";

const Experience = ({ data }) => {
  const darkMode = useContext(GlobalState).darkMode;

    return (
        <Layout headerTitle='Experience'>
            <SEO title="Experience"/>
            <Container maxWidth='xl' style={{padding: '1.2rem 1rem'}}>
                <Grid container spacing={3}>
                    <Grid item md={4} xs={12}>
                        <Card className='cityImg'>
                            <Img style={{height: '100%'}} fluid={data.file.childImageSharp.fluid}/>
                        </Card>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <Paper style={darkMode ? {padding: '1.8rem', backgroundColor: '#4d4d4d', color: 'white'} : 
                            {padding: '1.8rem'}}>
                            <div className='expText'>
                                <Typography variant="h6"><strong>OppenheimerFunds, Inc. (Invesco)</strong></Typography>
                                <Typography variant="subtitle1">June 2018 - September 2019</Typography>
                                <Typography variant="subtitle2">
                                    Developed custom Salesforce CRM components and led an overhaul of DevOps processes to 
                                    tighten feedback loops and deliver value twice as fast.
                                </Typography>
                                <br/>

                                <ul>
                                    <li><Typography variant="body2">
                                        Increased sales effectiveness by designing the UI/UX for a lead-scoring system that dynamically 
                                        rates the probability of client conversion and the optimal tactics to complete sales funnels. 
                                    </Typography></li>
                                    <li><Typography variant="body2">
                                        Decreased development lead time by 50% (from 2 weeks, to 1 week) by focusing on smaller 
                                        iterations to deliver faster value to users, quicker feedback, and reduce contention of resources.
                                    </Typography></li>
                                    <li><Typography variant="body2">
                                        Successfully merged CRM systems by cleaning/importing over 3 million records with a 98% success 
                                        rate and refactoring thousands of legacy code lines to support ES6 and current code standards.
                                    </Typography></li>
                                    <li><Typography variant="body2">
                                        Boosted user efficiency by implementing a client scheduling tool, allowing top financial 
                                        advisors to directly view the itinerary of a desired consultant and book a meeting time.
                                    </Typography></li>
                                    <li><Typography variant="body2">
                                        Spearheaded redesign of entire SalesForce CRM system to utilize modern, reactive design 
                                        principles, using test-driven development and component-driven architecture.
                                    </Typography></li>
                                    <li><Typography variant="body2">
                                        Defined a leadership role by heading daily stand-ups, conducting technical interviews 
                                        for new hires, speaking at Toastmasters International, presenting to interns, 
                                        and administering user training.
                                    </Typography></li>
                                </ul>
                            </div>

                            <br/>

                            <div className='expText' style={{borderTop: '1px grey solid', paddingTop: '1.2rem'}}>
                                <Typography variant="h6"><strong>StoryCorps, Inc.</strong></Typography>
                                <Typography variant="subtitle1">June 2016 - September 2017</Typography>
                                <Typography variant="subtitle2">
                                    Developed front and back-end code for multiple award-winning, web-based projects. 
                                    Led weekly scrum meetings and provided input to key UX decisions.  
                                </Typography>

                                <br/>
                                <ul>
                                    <li><Typography variant="body2">
                                        Engineered the UI/UX for a re-designed Webby Award honored website (storycorps.org). 
                                    </Typography></li>
                                    <li><Typography variant="body2">
                                        Designed and launched a social media platform (archive.storycorps.org) with over 172,000 posts.
                                    </Typography></li>
                                    <li><Typography variant="body2">
                                        Constructed bug reports for a TED Prize winning, Webby Award nominated mobile application.
                                    </Typography></li>
                                </ul>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default Experience;
export const query = graphql`
    query {
        file(relativePath: {eq: "cityScape.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 50000, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`
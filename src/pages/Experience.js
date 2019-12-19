import React, { useContext } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Grid, Card, Typography, Container, Paper, Link, Button } from '@material-ui/core';
import './Experience.css';
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import { GlobalState } from "../Context/GlobalContext";
import resume from '../images/Resume_BrianLandvogt.pdf';

const Experience = ({ data }) => {
    const darkMode = useContext(GlobalState).darkMode;
    return (
        <Layout headerTitle='Experience'>
            <SEO title="Experience"/>
            <Container maxWidth='xl' style={{padding: '1.2rem 1rem'}}>
                <Grid container spacing={2}>
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
                                <Typography variant="subtitle2"><i>
                                Full-Stack Agile Development, supporting Sales-Distribution CRM: 
                                JavaScript, HTML/CSS, Salesforce Apex
                                </i></Typography>
                                <br/>
                                <ul>
                                    <li><Typography variant="body2">
                                        Designed and developed dozens of components, such as a Lead Score 
                                        component that takes in pre-processed data and outputs the optimal 
                                        methods for converting a lead through the sales pipeline.
                                    </Typography></li>
                                    <li><Typography variant="body2">
                                        Developed and unit tested an Actionable Leads page that queries and 
                                        displays client data for a given Financial Advisor’s region, as well as 
                                        the tools to manipulate that data and carry out next steps.
                                    </Typography></li>
                                    <li><Typography variant="body2">
                                        Led an overhaul of the team’s DevOps process by teaching consultants 
                                        new continuous deployment tools, and by focusing on smaller iterations 
                                        to deliver code faster and shorten feedback loops.
                                    </Typography></li>
                                    <li><Typography variant="body2">
                                        Cleaned and imported over 3 million records with a 98% success rate 
                                        into the OppenheimerFunds’ CRM as part of the Invesco acquisition and 
                                        subsequent decommissioning of Invesco’s older CRM.
                                    </Typography></li>
                                    <li><Typography variant="body2">
                                        Configured and trained users in several API plugins, such as ForgeRock 
                                        SSO and an integrated outreach tool that automatically fetches data when 
                                        a client creates meetings on an advisor’s calendar.
                                    </Typography></li>
                                    <li><Typography variant="body2">
                                        Held a leadership role by heading daily Agile standups, creating presentations 
                                        for interns, speaking at Toastmasters International, and leading interviews 
                                        for new-hires and for user-design (UCD) sessions.
                                    </Typography></li>
                                </ul>
                            </div>
                        </Paper>

                        <Paper style={darkMode ? {padding: '1.8rem', backgroundColor: '#4d4d4d', 
                            color: 'white', marginTop: '1rem'} : {padding: '1.8rem', marginTop: '1rem'}}>
                            <div className='expText'>
                                <Typography variant="h6"><strong>StoryCorps, Inc.</strong></Typography>
                                <Typography variant="subtitle1">June 2016 - September 2017</Typography>
                                <Typography variant="subtitle2"><i>
                                    Front-End Agile Development, for multiple web-based projects: 
                                    JavaScript, HTML/CSS, WordPress
                                </i></Typography>
                                <br/>
                                <ul>
                                    <li><Typography variant="body2">
                                        Developed the UI/UX for a re-designed Webby Award honored 
                                        website (storycorps.org). 
                                    </Typography></li>
                                    <li><Typography variant="body2">
                                        Designed and launched a social media platform (archive.storycorps.org) 
                                        with over 172,000 posts.
                                    </Typography></li>
                                    <li><Typography variant="body2">
                                        Constructed bug reports for a TED Prize winning, Webby Award nominated 
                                        mobile application.
                                    </Typography></li>
                                </ul>
                            </div>
                        </Paper>
                        <Button variant='contained' style={{backgroundColor: '#576F84', display: 'block', 
                            marginLeft: 'auto', marginRight: 'auto', marginTop: '1rem'}}>
                            <Link style={{textDecoration: 'none', color: 'white', textTransform: 'capitalize'}} 
                            href={resume}>View Full Resume</Link>
                        </Button>
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
                fluid(maxWidth: 4500, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`
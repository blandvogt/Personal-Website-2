import React, { useContext } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Display from '../components/Display';
import Accordion from '../components/Accordion';
import { Container, useMediaQuery, useTheme, ListItem, ListItemText, 
  Paper, Typography, Card, CardContent, Grid } from '@material-ui/core';
import Overview from './Skills/Overview';
import FrontEnd from './Skills/FrontEnd';
import BackEnd from './Skills/BackEnd';
import ReactTools from './Skills/ReactTools';
import Salesforce from './Skills/Salesforce';
import Other from './Skills/Other';
import { Link } from "gatsby";
import { GlobalState } from "../Context/GlobalContext";
import Img from 'gatsby-image';

const Blog = ({ data }) => {
  const darkMode = useContext(GlobalState).darkMode;
  const cards = data.allMarkdownRemark.edges.map(post => (
      <Grid item xs={12} sm={6} md={4} key={post.node.frontmatter.id}>
          <Card style={darkMode ? { backgroundColor: '#4d4d4d', color: 'white' } : {}}>
              <CardContent>
                  <Typography variant={'body1'} gutterBottom><strong>{post.node.frontmatter.title}</strong></Typography>
                  <Typography variant={'body2'}> {post.node.frontmatter.body} </Typography>
                  <Typography style={{float: 'right', margin: '0.5rem'}} variant={'body2'} >
                      <Link style={{color: '#297999'}} to={post.node.frontmatter.path}>Read More</Link>
                  </Typography>
              </CardContent>
          </Card>
      </Grid>
  ));

  return (
    <Layout headerTitle='Blog'>
      <SEO title="Blog" />
      <Container maxWidth={'lg'} style={{padding: '1.2rem 1rem'}}>
        {cards}
      </Container>
    </Layout>
  )
}


export default Blog;
export const query = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                        date
                        author
                    }
                }
            }
        }
    }
`
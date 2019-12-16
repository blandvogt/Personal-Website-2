import React, { useContext } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Typography, Card, CardContent, Grid } from '@material-ui/core';
import { Link } from "gatsby";
import { GlobalState } from "../Context/GlobalContext";

const Blog = ({ data }) => {
  const darkMode = useContext(GlobalState).darkMode;
  const cards = data.allMarkdownRemark.edges.map(post => (
      <Grid item xs={12} sm={6} md={6} key={post.node.frontmatter.id}>
          <Card style={darkMode ? { backgroundColor: '#4d4d4d', color: 'white' } : {}}>
              <CardContent>
                  <Typography variant={'body1'} gutterBottom><strong>{post.node.frontmatter.title}</strong></Typography>
                  <Typography variant={'body2'}> {post.node.frontmatter.summary} </Typography>
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
        <Grid container>{cards}</Grid>
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
                        summary
                    }
                }
            }
        }
    }
`
import React, { useContext } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Paper, Typography, Button } from '@material-ui/core';
import { Link } from "gatsby";
import { GlobalState } from "../Context/GlobalContext";

const BlogPost = ({ data }) => {
    const post = data.markdownRemark;
    const darkMode = useContext(GlobalState).darkMode;
    return (
        <Layout headerTitle='Blog'>
            <SEO title={post.frontmatter.title}/>
            <Container maxWidth={'lg'} style={{padding: '1.2rem 1rem'}}>
                <Paper style={darkMode ? { backgroundColor: '#4d4d4d', color: 'white', padding: '1.2rem'} : {padding: '1.2rem'}}>
                    <Typography variant={'h6'}><strong>{post.frontmatter.title}</strong></Typography>
                    <Typography variant={'body2'}><strong>{post.frontmatter.date}</strong></Typography>
                    <br/>
                    <Typography variant={'body2'} dangerouslySetInnerHTML={{ __html: post.html }}></Typography>
                </Paper>
                <Link to="/Blog" style={{color: '#297999'}}>
                    <Button variant='contained' style={{backgroundColor: '#576F84', color: 'white', marginTop: '1rem'}}>
                        Back
                    </Button>
                </Link>
            </Container>
        </Layout>
    )
}


export default BlogPost;
export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: {path: { eq: $path }}) {
            html
            frontmatter {
                path
                title
                author
                date
            }
        }
    }
`
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container } from '@material-ui/core';
import { Link } from "gatsby";

const BlogPost = ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Layout headerTitle='Blog'>
            <Container maxWidth={'xl'} style={{padding: '1.2rem 1rem'}}>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
                <Link to="/Blog">Back</Link>
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
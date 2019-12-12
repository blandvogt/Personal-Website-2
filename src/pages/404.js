import React from "react"
import { graphql } from "gatsby";
import { makeStyles, Typography } from '@material-ui/core'
import Img from 'gatsby-image';

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data }) => {
  const { center } = useStyles();
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className={center}>
        <Img fluid={data.file.childImageSharp.fluid}/>
        <Typography variant={'h6'}>
          The page you're looking for has gone missing!
        </Typography>
      </div>
    </Layout>
  )
}

const useStyles = makeStyles(() => ({
  center: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    marginTop: '10%',
    textAlign: 'center'
  }
}));

export default NotFoundPage;
export const query = graphql`
    query {
      file(relativePath: {eq: "lost.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 50000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
      }
    }
`

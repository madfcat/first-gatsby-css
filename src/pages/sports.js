import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'

const Sports = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
            author,
                    title,
            description
            }
        }
        }
    `)

    const info = data.site.siteMetadata;
    console.log("info ", info)
    return (
        <Layout>
            <h1>{info.title}</h1>
            <h4>{info.author}</h4>
            <p>{info.description}</p>
        </Layout>
    )
}

export default Sports
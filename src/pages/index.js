import * as React from "react"
import Layout from '../components/Layout'
import Hero from '../components/hero/Hero'
import Categories from "../components/categories/Categories"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Categories />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
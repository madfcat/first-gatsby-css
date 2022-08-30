import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import 'fontsource-open-sans'
import '../css/typography.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        //font-family: "Open Sans";
        font-family: "Shippori Mincho B1";
    }
`

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout
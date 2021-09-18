import React from "react"
import styled from "styled-components"
import Navbar from "./Navbar"
import Header from "./Header"
import Footer from "./Footer"

export const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Navbar />
        <Header />
        {children}
        <Footer />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section``

export default Layout

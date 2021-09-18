import React from "react"
import styled from "styled-components"
import Navbar from "./Navbar"
// import Header from "./Header"
import Footer from "./Footer"
import Bgimage from "./Bgimage"

export const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Navbar />
        <Bgimage />
        {/* <Header /> */}
        {children}
        <Footer />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section``

export default Layout

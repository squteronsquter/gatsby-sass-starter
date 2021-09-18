import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"

export default function Navbar() {
  return (
    <>
      <Wrapper>
        <nav>
          <div>
            <Link to="/">
              <StaticImage src="../images/logo.svg" alt="Logo" width="50" />
            </Link>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/test">Test</Link>
              </li>
            </ul>
          </div>
        </nav>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  nav ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }
  a {
    padding: 0.3rem 1rem;
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    color: #ccc;
  }
`

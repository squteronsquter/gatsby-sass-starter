import React from "react"
import Layout from "../components/Layout"
import "../assets/css/app.scss"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <Layout>
      <main>
        <StaticImage src="../images/logo.svg" alt="logo" />
      </main>
    </Layout>
  )
}

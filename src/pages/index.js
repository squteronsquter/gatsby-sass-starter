import React from "react"
import Layout from "../components/Layout"
import "../assets/css/app.scss"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>
      <StaticImage src="../assets/images/road.jpeg" alt="Road" />
    </Layout>
  )
}

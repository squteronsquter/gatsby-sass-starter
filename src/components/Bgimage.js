import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

const GbiBridged = () => {
  const { backgroundimage123 } = useStaticQuery(
    graphql`
      query {
        backgroundimage123: file(relativePath: { eq: "road.jpeg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 2000
              quality: 50
              webpOptions: { quality: 70 }
            )
          }
        }
      }
    `
  )

  const pluginImage = getImage(backgroundimage123)

  return <BgImage image={pluginImage}>Testing</BgImage>
}

export default GbiBridged

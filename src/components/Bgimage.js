import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

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

  const image = getImage(backgroundimage123)

  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage Tag="section" {...bgImage} preserveStackingContext>
      test
    </BackgroundImage>
  )
}

export default GbiBridged

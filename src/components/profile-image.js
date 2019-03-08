import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
import React from "react"

const ProfileImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "me.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img className="img-fluid mb-5 d-block mx-auto" style={{width: "256px", height: "256px"}} fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default ProfileImage

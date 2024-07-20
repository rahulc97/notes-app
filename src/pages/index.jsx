import React from "react"
import Seo from "../components/seo"
import { Topbar } from "../components/Topbar"

const IndexPage = () => (
  <div className="flex flex-col">
    <Topbar />
    <div className="h-[1700px] relative top-[612px] bg-[#eee8e2]">jhsgfhfd</div>
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Welcome" />

export default IndexPage

import * as React from "react"
import Seo from "../components/seo"

const IndexPage = () => (
<div className="h-full text-white p-[60px] bg-slate-800">
  Home page
</div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

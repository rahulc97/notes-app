import React from "react"
import Seo from "../components/seo"
import { Topbar } from "../components/Topbar"
import { CollaborationSection } from "../components/CollaborationSection"
import { FullAccessSection } from "../components/FullAccess"
import { Editor } from "../components/Editor"
import { Footer } from "../components/Footer"
import { ShareThoughts } from "../components/ShareThoughts"

const IndexPage = () => (
  <div className="flex flex-col">
    <Topbar />
    <div className=" relative top-[612px] ">
      <div className="h-[800px] bg-[#eee8e2]">jshgfjsghfd</div>
      <CollaborationSection />
      <Editor />
      <ShareThoughts />
      <FullAccessSection />
      <Footer />
    </div>
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Welcome" />

export default IndexPage

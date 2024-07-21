import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const FeatureItem = ({  featureData }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {extension: {regex: "/(jpg|jpeg|png|webp)/"}, sourceInstanceName: {eq: "images"}}) {
        edges {
          node {
            base
            relativePath
            childImageSharp {
              gatsbyImageData(width: 64)
            }
          }
        }
      }
    }
  `);

  // Filter the image using the featureData.imageName variable
  const imageNode = data.allFile.edges.find(edge => edge.node.base === featureData.imageName);
  const image = imageNode ? getImage(imageNode.node.childImageSharp.gatsbyImageData) : null;

  return (
    <div className='flex flex-col w-[176px] items-start'>
      <GatsbyImage image={image} alt={featureData.title} />
      <div className='text-lg text-[#333] font-bold py-3'>
        {featureData.title}
      </div>
      <div className='text-base text-[#595959]'>
        {featureData.description}
      </div>
    </div>
  )
};

export default FeatureItem;

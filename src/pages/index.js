import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const videos = get(this, 'props.data.allYoutubeVideo.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
          {videos.map(({ node }) => {
            return (
              <div
                key={node.videoId}
                style={{
                  // maxW: 360,
                  // flex: 1,

                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <a href={`https://www.youtube.com/watch?v=${node.videoId}`}>
                  <Img
                    resolutions={
                      node.localThumbnail.childImageSharp.resolutions
                    }
                    // style={{ width: 360 }}
                  />
                </a>
              </div>
            )
          })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allYoutubeVideo {
      edges {
        node {
          id
          title
          videoId
          description
          thumbnail {
            url
            width
            height
          }
          localThumbnail {
            id
            childImageSharp {
              id
              resolutions {
                ...GatsbyImageSharpResolutions
              }
            }
          }
        }
      }
    }
  }
`

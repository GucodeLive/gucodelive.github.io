import React from 'react'
import Link from 'gatsby-link'
import Logo from '../logo.png'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Link to="/">
            <div>
              <img src={Logo} style={{ width: 120 }} />
            </div>
          </Link>
          <p>ใครไม่โค้ด กูโค้ด</p>
          <a href="https://www.buymeacoffee.com/gucode" target="_blank">
            <img
              src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png"
              alt="Buy Me A Coffee"
            />
          </a>
        </div>
        {children()}
      </div>
    )
  }
}

export default Template

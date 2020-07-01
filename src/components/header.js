import PropTypes from "prop-types"
import React from "react"

import THCLogo from "./THCLogo"

const Header = () => (
  <header
    style={{
      background: `rgba(0, 0, 0, 0.38)`,
      padding: `2rem 1.0875rem`,
      position: `relative`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        width: `200px`,
      }}
    >
      <a
        href="https://thclabelsolutions.com"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <THCLogo alt="The House of Custom Logo" />
      </a>
    </div>
    <div style={{ padding: `0 1rem`, maxWidth: `900px`, margin: `0 auto`, textAlign: `center` }}>
      <h4 style={{ fontWeight: `400`, color: `#FCD199`, lineHeight: `1.3` }}>
        THC Label & Packaging Solutions is your one-stop-shop for custom labels
        and packaging needs. We have you covered from printers, labels,
        applicators, packaging, signage or branding creation. Focus your
        attention on crafting the ideal product, while we handle the rest.
      </h4>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"
import netlifyIdentity from 'netlify-identity-widget';


export default (props) => (
  <nav className="navigation">
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    <div data-netlify-identity-menu></div>
    <div data-netlify-identity-button>Login</div>
    <Link to="/contact">Contact</Link>
    <ThemeChanger/>
  </nav>
  
)
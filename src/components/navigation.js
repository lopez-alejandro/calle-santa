import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <div data-netlify-identity-menu></div>
    <div data-netlify-identity-button>Login</div>
    <Link to="/contact">Contact</Link>
    <ThemeChanger/>
  </nav>
  
)
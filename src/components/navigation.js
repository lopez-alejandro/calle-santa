import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}
export default (props) => (
  <nav className="navigation"> 
    <div data-netlify-identity-menu></div>
    <div data-netlify-identity-button>Login</div>
    <Link to="/contact">Contact</Link>
    <ThemeChanger/>
  </nav>
  
)
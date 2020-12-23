import React from "react"
import { Link } from "gatsby"
import ThemeChanger from "../components/themeChanger"
import netlifyIdentity from 'netlify-identity-widget';
import { document } from 'browser-monads';

const netlifyAuth = {
  isAuthenticated: false,
  user: null,
  authenticate(callback) {
    this.isAuthenticated = true;
    // netlifyIdentity.open();
    netlifyIdentity.on('login', user => {
      this.user = user;
      callback(user);
    });
  },
  signout(callback) {
    this.isAuthenticated = false;
    netlifyIdentity.logout();
    netlifyIdentity.on('logout', () => {
      this.user = null;
      callback();
    });
  }
};

const login = () => {
  console.log('you clicked the login button');
  netlifyAuth.authenticate(() => {
    this.setState({ redirectToReferrer: true });
    document.location.href = "/admin/";
  });
};

export default (props) => (
  <nav className="navigation">
    <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    <div data-netlify-identity-menu></div>
    {/* <div data-netlify-identity-button className="button -primary" onClick={login}>Login</div> */}
    <Link to="/contact">Contact</Link>
    <ThemeChanger/>
  </nav>
  
)
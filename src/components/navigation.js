import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"
import netlifyIdentity from 'netlify-identity-widget';

const netlifyAuth = {
  isAuthenticated: false,
  user: null,
  authenticate(callback) {
    this.isAuthenticated = true;
    netlifyIdentity.open();
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

login = () => {
  netlifyAuth.authenticate(() => {
    this.setState({ redirectToReferrer: true });
  });
};

export default (props) => (
  <nav className="navigation">
    <div data-netlify-identity-menu></div>
    <div data-netlify-identity-button class="button" onclick={login}></div>
    <Link to="/contact">Contact</Link>
    <ThemeChanger/>
  </nav>
  
)
import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";

// Layout
import Layout from "./layout/Layout";

// pages
import Home from "./components/HomeComponent";
import About from "./components/AboutComponent";
import Contact from "./components/ContactComponent";
// import Explore from "./components/ExploreComponent";
import Login from "./components/LoginComponent";
import Profile from "./components/ProfileComponent";
import Exploreinfo from "./components/ExploreinfoComponent";
import Explore from "./components/ExploreContainer";
import EditProfile from "./components/EditprofileComponent";

import { Route, Switch, Redirect, History } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/exploreinfo/:param" component={Exploreinfo} />
            <Route path="/explore" component={Explore} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/editprofile" component={EditProfile} />
          </Switch>
        </Container>
      </Layout>
    );
  }
}

export default App;

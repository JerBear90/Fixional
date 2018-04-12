import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, IndexRoute, Redirect, Link, hashHistory } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FixionalTheme from '../FixionalTheme';

import MenuBar from '../MenuBar';
import Footer from './Footer';

import Home from './Home';
import Why from './Why';
import Pricing from './Pricing';
import Login from './Login';
import Contact from './Contact';
import About from './About';

class Application extends React.Component {

  constructor(props){
    super(props)

    this.state = {};
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  //<Route path="/usecases" component={Usecases} />
  //<Route path="/whitepaper" component={Whitepaper} />
  //<Route path="/blog" component={Blog} />
  //<Route path="/features" component={Features} />

  render(){

    return(
      <MuiThemeProvider theme={FixionalTheme}><div>
        <BrowserRouter history={hashHistory}><div style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column"
        }}>
          <MenuBar

            home={{location: "/home"}}

            links={[
              {label: "Why Fixional?", location: "/why"},
              // {label: "Pricing", location: "/pricing"},
              {label: "Log In", location: "/login"},
            ]}

          />
          <Switch>
            <Redirect exact path="/" to="/home"/>
            <Route path="/home" component={Home} />
            <Route path="/why" component={Why} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/login" component={Login} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </Switch>
          <Footer

            sections={[
              {
                title: "Company",
                links: [{label: "About", location: "/about"}, /*{label: "Blog", location: "/blog"},*/ {label: "Contact", location: "/contact"}]
              },
              {
                title: "Software",
                links: [
                  // {label: "Use Cases", location: "/usecases"},
                  // {label: "Pricing", location: "/pricing"},
                  // {label: "Features", location: "/features"}]
              },
              {
                title: "Resources",
                links: [/*{label: "White Paper", location: "/whitepaper"}*/]
              }
            ]}

            policy="/"
            terms="/"
            email="info@fixional.co"
            twitter="https://twitter.com/Fixional_Inc"
            facebook="https://www.facebook.com/Fixional/"
            linkedin="https://www.linkedin.com/company/fixional-inc./"
          />
        </div></BrowserRouter>
      </div></MuiThemeProvider>
    );
  }
}

ReactDOM.render(
  <Application/>,
  document.getElementById('application')
);

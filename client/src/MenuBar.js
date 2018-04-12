import axios from 'axios';
import React from 'react';
import FixionalTheme from './FixionalTheme';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Popover from 'material-ui/Popover';
import Menu, { MenuItem } from 'material-ui/Menu';

import { Link, NavLink } from 'react-router-dom'


class MenuText extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      links: [],
      menuOpen: false
    };

    this.logout = this.logout.bind(this);
  }

  componentDidMount(){
  }

  logout(){
    return axios.post('/logout').then(function(){
      location = "/login";
    });
  }

  render(){

    var linkStyle = {
      margin: "10px 1.5em",
      padding: "0px 1em",
      height: "2.5em",
      fontSize: "1em",
      textTransform: "none",
      color: FixionalTheme.palette.primaryColor
    };

    var links = [];
    for(var i in this.props.links){
      var link = this.props.links[i];
      // We need to bind the function here or we reference a single "i" value even though it has gone out of scope.. Babel bug?
      links.push(
        <NavLink
          key={i}
          to={link.location}
          activeClassName="activeLink"
        >
          <Button
            color="primary"
            style={linkStyle}
          >{link.label}</Button>
        </NavLink>
      );
    }

    var logout = "";
    if(this.props.logout == true){
      logout = (
        <NavLink
          key={i}
          to="login"
          activeClassName="activeLink"
        >
          <Button
            color="primary"
            style={linkStyle}
          >Log Out</Button>
        </NavLink>
      );
    }

    return(
      <span>
        <style>{".activeLink *{font-weight: bold !important;}"}</style>
        {links}

        {logout}
      </span>
    );
  }
}


class MenuButton extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      menuOpen: false,
    };

    this.logout = this.logout.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu(event) {
    this.setState({
      menuOpen: true,
      menuAnchorElement: event.target
    });
  }

  closeMenu() {
    this.setState({
      menuOpen: false
    });
  }

  logout(){
    return axios.post('/logout').then(function(){
      location = "/login";
    });
  }

  render(){

    var menuItemStyle = {
      padding: "0.5em",
      fontSize: "1.5em"
    };

    var links = [];
    for(var i in this.props.links){
      var link = this.props.links[i];
      links.push(<Link to={link.location} key={i}><MenuItem style={menuItemStyle}>{link.label}</MenuItem></Link>)
    }

    var logout = "";
    if(this.props.logout == true){
      logout = (<MenuItem onClick={this.logout}>Log Out</MenuItem>);
    }

    return(
      <span>
        <IconButton id="menuButton"
          onClick={this.openMenu}
          style={{
            height: "auto",
            width: "auto",
            marginTop: "0.5em"
          }}
        >
          <MenuIcon style={{height: "25pt",  width: "25pt"}} color="primary"/>
        </IconButton>
        <Menu
          open={this.state.menuOpen}
          anchorEl={this.state.menuAnchorElement}
          //anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          //targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onClose={this.closeMenu}
        >
          {links}

          {logout}
        </Menu>
      </span>
    );
  }
}


class MenuBar extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      displayMenuButton: false
    };

    this.setMenuDisplay = this.setMenuDisplay.bind(this);
  }

  componentDidMount(){
    // Initially set the display
    this.setMenuDisplay();
    window.addEventListener("resize", this.setMenuDisplay.bind(this));
  }


  setMenuDisplay(){

    if(window.innerWidth <= 1080){ // TODO base on EM
      this.setState({
        displayMenuButton: true
      });
    }
    else{
      this.setState({
        displayMenuButton: false
      });
    }
  }

  render(){

    var homeIcon = (<img src="./images/blue_logo.png"
      style={{
        position: "absolute",
        height: "1.5em",
        marginTop: "1.3em",
        marginLeft: "2em",
        zIndex: 9999,
        color: FixionalTheme.palette.primaryColor
      }}
    />);

    var homeElement = homeIcon;
    if(this.props.home != null){
      homeElement = (<Link to={this.props.home.location}> {homeIcon} </Link>);
    }

    return(
      <div>
        <div
          style={{
            borderBottom: "2px solid " + FixionalTheme.palette.primaryColor,
            position: "fixed",
            top: 0,
            height: "3em",
            width: "100%",
            zIndex: 99,
            backgroundColor: FixionalTheme.palette.secondaryColor
          }}
        >
          {homeElement}
          <span style={{float: "right",  marginTop: ".3em",  marginRight: "2em"}}>
          { this.state.displayMenuButton ? <MenuButton links={this.props.links} logout={this.props.logout} /> : <MenuText ref="menuText" links={this.props.links} logout={this.props.logout} /> }
          </span>
        </div>

        <div
          style={{
            marginTop: "5em"
          }}
        >
        </div>
        <br/>
      </div>
    );
  }
}

export default MenuBar;

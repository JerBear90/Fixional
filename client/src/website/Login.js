import axios from 'axios';
import React from "react";
import ReactDOM from 'react-dom';
import FixionalTheme from '../FixionalTheme';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import Panel from './Panel'

var boxStyle = {
  display: "flex",
  flexBasis: 0,
  justifyContent: "center",
  alignItems: "top",
  fontSize: "2vw",
  color: FixionalTheme.palette.secondaryTextColor,
  wrap: "no-wrap",
  marginTop: "4vw",
  flexDirection: "column"
};

class Login extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      disabled: true,
      email: "",
      password: ""
    };

    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.enable = this.enable.bind(this);
    this.disable = this.disable.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  emailChange(event){

    this.setState({
      email: event.target.value
    }, function(){

      if(this.state.email != null && this.state.email.length > 0 && this.state.password != null && this.state.password.length > 0 ){
        this.enable();
      }
      else{
        this.disable();
      }
    });
  }

  passwordChange(event){

    this.setState({
      password: event.target.value
    }, function(){

      if(this.state.email != null && this.state.email.length > 0 && this.state.password != null && this.state.password.length > 0 ){
        this.enable();
      }
      else{
        this.disable();
      }
    });
  }

  enable(){

    this.setState({
      disabled: false
    });
  }

  disable(){
    this.setState({
      disabled: true
    });
  }


  submit(){

    var email = this.state.email;
    var password = this.state.password;
    // For some reason an axios request is causing the session to be stored in a cookie..
    axios.interceptors.request.use(function(config){
      config.headers.Authorization = 'Basic ' + btoa(email + ":" + password);
      return config;
    });

    return axios.post('/login').then(function(){
      location = "/";
    });
  }

  render() {

    return(
      <div className="section">
        <div style={boxStyle}>
            <h1 style={{margin: "auto"}}>Log in</h1>
            <br />
            <TextField
              //hintText="Email Field"
              label="Email"
              onChange={this.emailChange}
              style={{margin: "auto"}}
            />
            <br />
            <TextField
              //hintText="Password Field"
              label="Password"
              type="password"
              onChange={this.passwordChange}
              style={{margin: "auto"}}
            />
            <br />
            <br />
            <Button
              color="primary"
              onClick={this.submit}
              disabled={this.state.disabled}
              label="Log In"
              style={{margin: "auto"}}
            >Log In</Button>
            <br />
            <br />
            <Button label={this.props.buttonText} style={{textTransform: "capitalize", margin: "auto"}} color="primary">Forgot your password?</Button>
        </div>
      </div>
    )
  }
}

/*
<div style={{
  width: "30%",
  padding: "4vw",
  alignSelf: "flex-start",
  boxSizing: "border-box"
}}>
</div>
<img src="./images/home1.png" style={{
  width: "70%",
  padding: "4vw",
  boxSizing: "border-box",
  objectFit: "scale-down"
}}/>
*/

export default Login;

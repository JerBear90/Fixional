import axios from 'axios';
import React from "react";
import ReactDOM from 'react-dom';
import FixionalTheme from '../FixionalTheme';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import DocumentMeta from 'react-document-meta';

import { Link } from 'react-router-dom'

import Recaptcha from 'react-recaptcha';


class Contact extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      preventSubmit: true
    };

    this.verifyHuman = this.verifyHuman.bind(this);
    this.humanVarified = this.humanVarified.bind(this);
    this.verificationComplete = false;

    this.subjectChange = this.subjectChange.bind(this);
    this.contactChange = this.contactChange.bind(this);
    this.messageChange = this.messageChange.bind(this);
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  verifyHuman(){
    this.recaptchaInstance.execute();
  }

  humanVarified(response){

    return axios({
      method: 'post',
      url: '/contact',
      data: {
        subject: this.state.subject,
        contact: this.state.contact,
        message: this.state.message,
        recaptchaResponse: response
      }
    }).then(function(response){
      window.location.reload(true);
    });
  }

  subjectChange(event){

    this.setState({
      subject: event.target.value
    });
  }

  contactChange(event){

    this.setState({
      contact: event.target.value
    });
  }

  messageChange(event){

    this.setState({
      message: event.target.value
    });
  }

  render() {

    const meta = {
      title: 'Welcome to Fixional | Smart Software for Editors, Authors, and Gold Miners.',
      description: 'How can we help? Contact us via the following form to let us know any questions, comments, concerns, issues, or ideas. We\'d love to hear from you.',
    };

    return(
      <div style={{marginTop: "2.5vw", fontSize: "2vw", color: FixionalTheme.palette.secondaryTextColor}}>
        <DocumentMeta {...meta} />

        <h1 style={{textAlign: "center"}}>Write Us</h1>

        <div style={{
          display: "flex",
          flexBasis: 0,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          flexGrow: 1,
          width: "60%",
          margin: "auto"
        }}>
          <TextField
            label="Subject"
            fullWidth={true}
            onChange={this.subjectChange}
          />
          <br/>
          <TextField
            label="What's your contact info?"
            fullWidth={true}
            onChange={this.contactChange}
          />
          <br/>
          <TextField
            label="How can we help?"
            fullWidth={true}
            multiline={true}
            onChange={this.messageChange}
          />
          <br/>
          <Button
            variant="raised"
            color="primary"
          //  type="submit"
            onClick={this.verifyHuman}
          >Send</Button>
        </div>
        <div style={{float: "right", marginRight: "20%"}}>
          <br/>
          <Recaptcha
            ref={e => this.recaptchaInstance = e}
            size="invisible"
            sitekey="6Lemv0UUAAAAAA49zg3bVXZmadVpsg_0UKbTgpmy"
            verifyCallback={this.humanVarified}
            badge="inline"
          />
          <br/>
        </div>
      </div>
    )
  }
}

export default Contact;

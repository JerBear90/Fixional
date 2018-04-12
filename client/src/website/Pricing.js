
import React from "react";
import ReactDOM from 'react-dom';
import FixionalTheme from '../FixionalTheme';
import Button from 'material-ui/Button';
import DocumentMeta from 'react-document-meta';

import { Link } from 'react-router-dom'

var textAnnouceStyle = {
  margin: "auto",
  color: FixionalTheme.palette.primaryColor,
  textAlign: "center",
  fontSize: "2em"
};


class Plan extends React.Component {

  constructor(props) {

    super(props)

    this.state = {};
  }

  render() {

    var features = [];
    for(var i = 0; i < this.props.features.length; i++){
      features.push(<li key={i} style={{padding: "0.5vw"}}>{this.props.features[i]}</li>);
    }

    var subtext = "";
    if(this.props.subtext != null){
      subtext = (<span style={{fontWeight: "normal"}}>{this.props.subtext}</span>);
    }

    return(
      <div style={{
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "2vw"
      }}>
        <div style={{
          backgroundColor: FixionalTheme.palette.alternateBackgroundColor,
          color: FixionalTheme.palette.primaryColor,
          flexGrow: 1
        }}>
          <div className="verticalBox">
            <span style={{fontSize: "1.5em"}}>{this.props.name}</span>
            <span style={{textAlign: "center", fontSize: "3em"}}>{this.props.price}</span>
            {subtext}
            <br/>
            <hr style={{color: FixionalTheme.palette.primaryColor, backgroundColor: FixionalTheme.palette.primaryColor, border: "0 none", width: "90%", height: "2px"}} />
            <ul style={{textAlign: "left"}}>
              {features}
            </ul>
            <br/>
          </div>
        </div>
        <Link to="/contact"><Button variant="raised" color="primary" label="Let's Try" style={{
          position: "relative",
          top: "-1em",
          display: "block",
          margin: "0px auto"
        }}>{"Let's Try"}</Button></Link>
      </div>
    );
  }
}


class Pricing extends React.Component {

  constructor(props) {

    super(props)

    this.state = {};
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {

    const meta = {
      title: 'Welcome to Fixional | Smart Software for Editors, Authors, and Gold Miners.',
      description: 'Fixional offers affordable plans for authors and teams across the publishing industry. Contact us to learn more about our pricing and to get a free quote.'
    };

    return(
      <div className="section">
        <DocumentMeta {...meta} />

        <div style={{
          textAlign: "center",
          color: FixionalTheme.palette.secondaryTextColor,
          fontSize: "3.5em"
        }}>{"Find a plan"}</div>
        <br/>
        <div style={textAnnouceStyle}>{"Sign up now for our special introductory rates."}</div>
        <br/>
        <div className="horizontalBox">
          <Plan
            name="Authors"
            price="$4.99"
            subtext="per month"
            features={[
              "Advanced proofreading",
              "Line editing",
              "Developmental editing",
              "Breakdown of metrics",
              "Editorial recommendations",
            ]}
          />
          <Plan
            name="Editors"
            price="$2.75"
            subtext="per manuscript"
            features={[
              "Advanced proofreading",
              "Line editing",
              "Developmental editing",
              "Breakdown of metrics",
              "Editorial recommendations",
              "Full report for each manuscript",
              "Ability to sort submissions",
              "Customizable responses",
            ]}
          />
          <Plan
            name="Teams"
            price="Contact Us"
            subtext="&nbsp;"
            features={[
              "Advanced proofreading",
              "Line editing",
              "Developmental editing",
              "Breakdown of metrics",
              "Editorial recommendations",
              "Full report for each manuscript",
              "Ability to sort submissions",
              "Customizable responses",
              "Unlimited submissions"
            ]}
          />
        </div>
      </div>
    );
  }
}

export default Pricing;

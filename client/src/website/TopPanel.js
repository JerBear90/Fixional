import axios from 'axios';
import React from "react";
import ReactDOM from 'react-dom';
import FixionalTheme from '../FixionalTheme';
import Button from 'material-ui/Button';
import MobileUtil from '../../utils/mobile-util'
import _ from 'lodash';

import { Link } from 'react-router-dom'

var headerStyle = {
  // display: "flex",
  flexBasis: 0,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  color: FixionalTheme.palette.secondaryTextColor,
  textAlign: "center",
  height: "auto",
  minHeight: "90vh",
  width: "80%",
  margin: "auto",
  paddingTop: "2.5vh"
}

var headerImageStyle = {
  boxSizing: "border-box"
};

class TopPanel extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      virt: false
    };

    this.setVirtStyle = this.setVirtStyle.bind(this);
  }

  componentDidMount(){
    // Initially set the display
    this.setVirtStyle();
    window.addEventListener("resize", this.setVirtStyle);
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.setVirtStyle);
  }

  setVirtStyle(){

    if(window.innerWidth <= 1080){ // TODO base on EM
      this.setState({
        virt: true
      });
    }
    else{
      this.setState({
        virt: false
      });
    }
  }

  render() {

    var headerAdjustStyle = _.clone(headerStyle);
    var headerImageAdjustStyle = _.clone(headerImageStyle);
    var titleFontSize = "3.5em";
    var subTitleFontSize = "2em";
    var buttonFontSize = "1.5em";

    var buttonStyle = {};
    var buttonLabelStyle = {};

    if(this.state.virt == false){
      headerAdjustStyle.justifyContent = "flex-start";
      headerImageAdjustStyle.width = "75%";
    }
    else{
      subTitleFontSize = "2em";
      titleFontSize = "3em";
      buttonStyle = {padding: "1em", width: "100%", backgroundColor: FixionalTheme.palette.primaryColor, fontSize: buttonFontSize, textTransform: "none"};
    }

    if(MobileUtil.isMobile() == true){
      subTitleFontSize = "1.5em";
      titleFontSize = "2.5em";
    }

    var imgBr = "";
    if(this.props.spaceImage == false){
      imgBr = <br/>;
    }

    return(
      <div style={headerAdjustStyle}>
        <div>
          <div style={{fontSize: titleFontSize}}>{this.props.title}</div>
          <br/>
          <div style={{fontSize: subTitleFontSize}}>{this.props.subTitle}</div>
          <Link to="/contact"><Button style={buttonStyle} className="btn-spacing" color="primary" variant="raised">{this.props.buttonText}</Button></Link>
          <br/>
        </div>
        {imgBr}
        <img src={this.props.image} style={headerImageAdjustStyle} alt={this.props.imageAlt}/>
      </div>
    )
  }
}

export default TopPanel;

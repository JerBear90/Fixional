import axios from 'axios';
import React from "react";
import ReactDOM from 'react-dom';
import FixionalTheme from '../FixionalTheme';
import Button from 'material-ui/Button';
import MobileUtil from '../../utils/mobile-util'
import _ from 'lodash';

import { Link } from 'react-router-dom'

var boxStyle = {
  display: "flex",
  flexBasis: 0,
  justifyContent: "center",
  alignItems: "flex-start",
  color: FixionalTheme.palette.secondaryTextColor,
  maxHeight:  "100vh",
  padding: "5em 0px"
};

var itemImageStyle = {
  width: "40%",
  boxSizing: "border-box",
  //alignItems: "center"
};

var itemTextStyle = {
  width: "40%",
  paddingLeft: "8vw"
  //alignSelf: "flex-start"
};

var buttonLabelStyle = {
  fontSize: "2em",
  fontWeight: "bold",
  textTransform: "none",
  paddingLeft: "0px",
  paddingRight: "0px",
  display: "inline",
  height: "auto"
}

var boxVirtStyle = {
  display: "flex",
  flexBasis: 0,
  justifyContent: "center",
  alignItems: "center",
  color: FixionalTheme.palette.secondaryTextColor,
  flexDirection: "column",
  height: "auto",
  paddingBottom: "5vh"
};

var itemImageVirtStyle = {
  width: "60%",
  marginTop: "8vh",
  boxSizing: "border-box",
  //alignItems: "center"
};

var itemTextVirtStyle = {
  width: "80%",
  marginTop: "8vh",
  //textAlign: "center"
  //alignSelf: "flex-start"
};


var buttonLabelVirtStyle = {
  fontSize: "2.5em",
  fontWeight: "bold",
  textTransform: "none",
  paddingLeft: "0px",
  paddingRight: "0px",
  display: "inline"
}
class Panel extends React.Component {

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

    // Set the proper style
    var boxAdjustStyle = boxStyle;
    var imageAdjustStyle = itemImageStyle;
    var textAdjustStyle = itemTextStyle;
    var buttonLabelAdjustStyle = buttonLabelStyle;
    var titleFontSize = "3.5em";
    var subTitleFontSize = "2em";

    if(this.state.virt == true){
      boxAdjustStyle = boxVirtStyle;
      imageAdjustStyle = itemImageVirtStyle;
      textAdjustStyle = itemTextVirtStyle;
      buttonLabelAdjustStyle = buttonLabelVirtStyle;
      subTitleFontSize = "2em";
      titleFontSize = "3.5em";
    }
    else{

      boxAdjustStyle = boxStyle;
      imageAdjustStyle = itemImageStyle;
      textAdjustStyle = itemTextStyle;

      if(this.props.textFirst == true){

        textAdjustStyle = _.clone(itemTextStyle);

        textAdjustStyle.paddingLeft = "0px";
        textAdjustStyle.paddingRight = "8vw";
      }
    }

    if(MobileUtil.isMobile() == true){
      subTitleFontSize = "1.5em";
      titleFontSize = "3em";
    }

    buttonLabelAdjustStyle.fontSize = subTitleFontSize;

    var imageEl = null;

    imageEl = (<img style={imageAdjustStyle} src={this.props.image} alt={this.props.imageAlt}/>);

    var textSegs = [];
    for(var i = 0; i < this.props.text.length; i++){
      textSegs.push(
        <div key={i}>
          <br/>
          <div style={{fontSize: subTitleFontSize}}>{this.props.text[i]}</div>
        </div>
      );
    }

    var headers = [];
    for(var i = 0; i < this.props.headers.length; i++){
      headers.push(<div key={i} style={{fontSize: titleFontSize}}>{this.props.headers[i]}</div>);
    }

    var button = "";
    if(this.props.buttonText != null){
      button = (
        <div>
          <Link to={this.props.buttonPath}><Button style={buttonLabelAdjustStyle}>{this.props.buttonText}</Button></Link>
        </div>
      );
    }

    var textEl = (
      <div style={textAdjustStyle}>
        {headers}
        {textSegs}
        {button}
      </div>
    );

    var box  = (
      <div style={boxAdjustStyle}>
        {imageEl}
        {textEl}
      </div>
    );


    if(this.props.textFirst == true || this.state.virt == true){

      box  = (
       <div style={boxAdjustStyle}>
         {textEl}
         {imageEl}
       </div>
     );
    }

    var style = {};
    if(this.props.style != null){
      style = this.props.style;
    }

    return(
      <div style={style}>
        {box}
      </div>
    )
  }
}

export default Panel;

import axios from 'axios';
import React from "react";
import ReactDOM from 'react-dom';
import FixionalTheme from '../FixionalTheme';
import Button from 'material-ui/Button';
import MobileUtil from '../../utils/mobile-util'
import _ from 'lodash';

import { Link } from 'react-router-dom'

class BottomPanel extends React.Component {

  constructor(props) {

    super(props)

    this.state = {};
  }

  render() {

    var imageStyle = {
      height: "2.5em"
    };
    var fontSize = "2em";

    if(MobileUtil.isMobile() == true){
      imageStyle = {height: "2em"};
      fontSize = "1.5em";
    }

    return(
      <div style={{
        display: "flex",
        flexBasis: 0,
        justifyContent: "center",
        alignItems: "center",
        fontSize: fontSize,
        flexDirection: "column",
        color: FixionalTheme.palette.secondaryTextColor,
        textAlign: "center",
        margin: "0px auto",
        width: "80%"
      }}>
        <img src="./images/blue_logo.png" className="logo"/>
        <div>
          <br/>
          <div>Discover how fixional can help improve your publication, your writing, and your workflow.</div>
          <Link to="/contact"><Button className="btn-spacing" variant="raised" label="Try It Out" color="primary">Try It Out</Button></Link>
        </div>
      </div>
    )
  }
}

export default BottomPanel;

import React from 'react';
import FixionalTheme from '../FixionalTheme';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import FacebookIcon from 'material-ui-next-community-icons/icons/facebook';
import TwitterIcon from 'material-ui-next-community-icons/icons/twitter';
import LinkedinIcon from 'material-ui-next-community-icons/icons/linkedin';
import EmailIcon from 'material-ui-icons/Email';

import { Link } from 'react-router-dom'

class TopFooter extends React.Component {

  constructor(props) {

    super(props);

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

  render(){

    var align = "center";
    if(this.state.virt == true){
      align = "center";
    }

    var sectionTitles = [];
    for(var i in this.props.sections){

      var section = this.props.sections[i];
      sectionTitles.push(<th key={i} style={{
        textAlign: align,
        color: FixionalTheme.palette.primaryColor,
        fontSize: "1.5em"
      }}>{section.title}</th>);
    }

    var sectionRows = [];
    var sectionRowCells = [];
    var linkSet = 0;
    var done = false;

    var buttonStyle = {fontSize: "1.5em"};
    var linkStyle = {
      fontSize: "1.3em",
      textAlign: "center",
      color: FixionalTheme.palette.primaryColor
    };
    if(this.state.virt == true){
      buttonStyle = {
        display: "block",
        margin: "auto",
        fontSize: "1.5em"
      }
    }

    while(done == false){

      var rowCells = [];
      var foundLink = false;

      for(var i in this.props.sections){

        var link = this.props.sections[i].links[linkSet];

        if(link == null){
          rowCells.push(<td key={i}></td>);
        }
        else{
          foundLink = true;
          rowCells.push(<td style={{
            color: FixionalTheme.palette.primaryColor
          }} key={i}><Link to={link.location}>
            <div style={linkStyle}>{link.label}</div>
          </Link></td>);
        }
      }

      if(foundLink == true){
        sectionRows.push(<tr key={linkSet}>{rowCells}</tr>);
        sectionRowCells.push(rowCells);
      }
      else{
        done = true;
      }

      linkSet ++;
    }

    var linkTable = null;
    var topFooter = null;

    if(this.state.virt == false){
      linkTable = (
        <table role="display" style={{
          width: "100%"
        }}>
          <thead><tr>
            {sectionTitles}
          </tr></thead>
          <tbody>
            {sectionRows}
          </tbody>
        </table>
      );

      topFooter = (
        <table role="presentation" className="presentation" style={{
          backgroundColor: FixionalTheme.palette.alternateBackgroundColor
        }}><tbody><tr>
          <td><img src="./images/blue_logo.png" className="footer-logo"/></td>
          <td>
            {linkTable}
          </td>
        </tr></tbody></table>
      );
    }
    else{
      linkTable = [];

      for(var i = 0; i < sectionRowCells.length; i++){
        var theseCells = sectionRowCells[i];

        for(var j = 0; j < sectionRowCells[i].length; j++){
          sectionRowCells[i][j] = (<tr key={j}>{sectionRowCells[i][j]}</tr>);
        }
      }

      for(var i = 0; i < sectionTitles.length; i++){
        linkTable.push(
          <table role="display" key={i} style={{
            width: "100%"
          }}><thead><tr>
            {sectionTitles[i]}
          </tr></thead><tbody>
            {sectionRowCells[i]}
          </tbody></table>
        );
      }

      topFooter = (
        <table role="presentation" className="presentation" style={{
          backgroundColor: FixionalTheme.palette.alternateBackgroundColor
        }}><tbody>
          <tr><td><img src="./images/blue_logo.png" className="footer-logo"/></td></tr>
          <tr><td>
            {linkTable}
          </td></tr>
        </tbody></table>
      );
    }

    return(
      <div className="top-footer">
        {topFooter}
      </div>
    );
  }
}

class BottomFooter extends React.Component {

  constructor(props) {

    super(props);

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
  render(){

    var cellStyle = {};
    if(this.state.virt == true){
      cellStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      };
    }

    var copyStyle = {};
    if(this.state.virt == true){
      copyStyle= {marginTop: "1em"};
    }

    var cell1 =(
      <span style={cellStyle}>
        <span style={copyStyle}>&copy; Fixional, Inc.</span>
        <Button href={this.props.policy} color="secondary" style={{textTransform: "none", color: FixionalTheme.palette.alternateTextColor}}>Privacy Policy</Button>
        <Button href={this.props.terms} color="secondary" style={{textTransform: "none", color: FixionalTheme.palette.alternateTextColor}}>Terms and Conditions</Button>
      </span>
    );

    var cell2Style = {
      fontSize: "1.5em",
      textAlign: "center"
    }

    if(this.state.virt == true){
      cell2Style = cellStyle;
    }

    var cell2 =(
      <div
        style={cell2Style}
      >{this.props.email}</div>
    );

    var cell3Style = {
      float: "right"
    }

    if(this.state.virt == true){
      cell3Style = cellStyle;
    }

    var cell3 =(
      <span
        style={cell3Style}
      ><span>
        <IconButton href={"mailto:" + this.props.email}><EmailIcon color="secondary" /></IconButton>
        <IconButton href={this.props.twitter}><TwitterIcon color="secondary" /></IconButton>
        <IconButton href={this.props.facebook}><FacebookIcon color="secondary" /></IconButton>
        <IconButton href={this.props.linkedin}><LinkedinIcon color="secondary" /></IconButton>
      </span></span>
    );

    var body = null;
    if(this.state.virt == true){
      body = (
        <tbody>
          <tr><td>{cell1}</td></tr>
          <tr><td>{cell2}</td></tr>
          <tr><td>{cell3}</td></tr>
        </tbody>
      );
    }
    else{
      body = (
        <tbody><tr>
          <td>{cell1}</td>
          <td>{cell2}</td>
          <td>{cell3}</td>
        </tr></tbody>
      );
    }

    return(
      <table role="display" style={{
        width: "100%",
        backgroundColor: FixionalTheme.palette.primaryColor,
        color: FixionalTheme.palette.secondaryColor
      }}>
        {body}
      </table>
    );
  }
}

class Footer extends React.Component {

  constructor(props) {

    super(props);

    this.state = {};
  }

  render(){

    return(
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end"
      }}>
        <TopFooter sections={this.props.sections}/>
        <BottomFooter
          policy={this.props.policy}
          terms={this.props.terms}
          email={this.props.email}
          twitter={this.props.twitter}
          facebook={this.props.facebook}
          linkedin={this.props.linkedin}
        />
      </div>
    );
  }
}

export default Footer;

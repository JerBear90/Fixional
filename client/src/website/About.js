import React from "react";
import ReactDOM from 'react-dom';
import FixionalTheme from '../FixionalTheme';
import Button from 'material-ui/Button';
import DocumentMeta from 'react-document-meta';

import BottomPanel from './BottomPanel'

import { Link } from 'react-router-dom'

class About extends React.Component {

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
      description: 'Fixional is the matchmaker between writers and publishers. Our smart software uses unique data points to help publishers make quicker, more effective decissions in their acquisitions process. Learn more about how Fixional can help your organization.'
    };

    return(
      <div className='about-section'>
        <DocumentMeta {...meta} />
        <div style={{textAlign: "center", fontSize:"2em"}}>About Us</div>
        <p>Fixional makes smart software that reviews writing and provides advanced manuscript editing.</p>
        <p>Our software helps authors edit and think about their work, it helps editors find the manuscripts that best match their publication, and it helps agents find new authors to represent.</p>
        <p>We began as a publisher trying to organize the world of online fiction onto one site. In the process, we decided we could best serve the world of writing by offering our software to other authors, editors, agents, and publishers.</p>
      </div>
    )
  }
}

export default About;

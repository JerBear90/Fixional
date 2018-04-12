import React from "react";
import ReactDOM from 'react-dom';
import FixionalTheme from '../FixionalTheme';
import Button from 'material-ui/Button';
import Panel from './Panel'
import BottomPanel from './BottomPanel'
import TopPanel from './TopPanel'
import DocumentMeta from 'react-document-meta';

import { Link } from 'react-router-dom'


class Home extends React.Component {

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
      description: 'Fixional delivers advanced software for proofreading, text analysis, content discovery, and workflow improvements. Try it out today to see how Fixional can help you and your team.'
    };

    return(
      <div>
        <DocumentMeta {...meta} />

        <TopPanel
          title = "For Editors, Authors, & Gold Miners"
          subTitle = "Smart software for discovering content, analyzing text, and streamlining workflows."
          buttonText = "Try It Out"
          buttonPath = "/contact"
          image = "./images/home0.svg"
          imageAlt = "Busy editor buried in work"
        />

        <Panel
          image="./images/home3.svg"
          imageAlt="Writer working beneath tree"
          headers={["New insights.", "New possibilities."]}
          text={[
            "How much more could you accomplish if your digital proofreader also looked at narrative, tone, theme, style, and originality?"
          ]}
          buttonText="See what's possible."
          buttonPath="/contact"
        />

        <Panel
          image="./images/home2.svg"
          imageAlt="Relaxed editor leaning back"
          headers={["Save time.", "Save money."]}
          text={[
            "Fixional can reduce your team's acquisition costs by more than 300% and help you spend more time doing what you love: reading and editing."
          ]}
          buttonText="Learn what fixional can do."
          buttonPath="/contact"
          textFirst={true}
          style={{
            backgroundColor: FixionalTheme.palette.alternateBackgroundColor
          }}
        />

        <Panel
          image="./images/home1.svg"
          imageAlt="Editor maintaining standards at scale"
          headers={["Your high standards.", "Upheld at scale."]}
          text={[
            "Fixional helps you review and explore thousands of manuscripts within moments.",
            "You can sort by quality, relevance, and fit so you can reply back to authors in days, not months."
          ]}
          buttonText="See how fixional can help."
          buttonPath="/contact"
        />

        <BottomPanel/>

      </div>
    )
  }
}

export default Home;

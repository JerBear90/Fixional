import React from "react";
import ReactDOM from 'react-dom';
import FixionalTheme from '../FixionalTheme';
import Button from 'material-ui/Button';
import Panel from './Panel'
import BottomPanel from './BottomPanel'
import TopPanel from './TopPanel'
import DocumentMeta from 'react-document-meta';

import { Link } from 'react-router-dom'

var headerStyle = {
  display: "flex",
  flexBasis: 0,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  color: FixionalTheme.palette.secondaryTextColor,
  textAlign: "center",
  height: "100vh",
  width: "80%",
  margin: "auto"
}

var headerImageStyle = {
  boxSizing: "border-box",
  alignItems: "center"
};


class Why extends React.Component {

  constructor(props) {

    super(props)

    this.state = {};
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {

    const meta = {
      title: 'Why Fixional | Advanced Proofreading, Content Discovery, and Workflow Improvements ',
      description: 'Fixional helps editors, agents, and publishers find the works they love to read and the time to read them. Learn how Fixional makes it easy to discover great writing, communicate with authors, and uphold high editorial standards at scale.'
    };

    return(
      <div>
        <DocumentMeta {...meta} />

        <TopPanel
          title = "Why Fixional?"
          subTitle = "You have more work than you have time and could use some help."
          buttonText = "Try It Out"
          buttonPath = "/contact"
          image = "./images/why0.svg"
          imageAlt = "Busy editor with more work than time"
          spaceImage={true}
        />

        <Panel
          image="./images/why1.svg"
          imageAlt="Should this manuscript be deleted?"
          headers={["You have some doubts"]}
          text={[
            "about the stories you're reviewing.",
            "Use Fixional to make more informed decisions about which works to publish, which to give closer review, and where to make improvements."
          ]}
          buttonText="See how fixional can help."
          buttonPath="/contact"
        />

        <Panel
          image="./images/why2.svg"
          imageAlt="Writing suffering from writer's block"
          headers={["Your writing is stuck"]}
          text={[
            "and you need help that goes deeper than grammar and punctuation.",
            "What if you could see exactly where you might be losing readers?"
          ]}
          buttonText="Learn what fixional can do."
          buttonPath="/contact"
          textFirst={true}
          style={{
            backgroundColor: FixionalTheme.palette.alternateBackgroundColor
          }}
        />

        <Panel
          image="./images/why3.svg"
          imageAlt="Publishing thinking"
          headers={["You have high standards"]}
          text={[
            "and only publish the best works you can find.",
            "What if you could review more submissions and respond more quickly to authors?"
          ]}
          buttonText="See what's possible."
          buttonPath="/contact"
        />

        <BottomPanel/>

      </div>
    )
  }
}


export default Why;

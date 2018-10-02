import React, { Component } from "react";
import { connect } from "react-redux";
import Questions from "./Questions";

class Dashboard extends Component {
  render() {
    return (
      <div>
        {this.props.questionIds.map(id => (
          <Questions id={id} key={id} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ questions, users }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(Dashboard);
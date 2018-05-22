import React, { Component } from "react";
import LoginForm from "../forms/LoginForm.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

class LoginPage extends Component {
  // submit func will call submit action
  // if everything goes well, redirect back to home page
  submit = data => {
    this.props.login(data).then(() => this.props.history.push("/"));
  };

  render() {
    return (
      <div>
        <h1>Login page</h1>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

// expect prop with history object with push method
LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

// connect used to connect react to redux
// 1st parameter is mapStateToProps if fetching data from state to this comp
// null since we're only using actions
// 2nd parameter is actions used in this Component
// last parameter is component name
export default connect(null, { login })(LoginPage);

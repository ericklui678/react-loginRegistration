import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

const HomePage = ({ isAuthenticated, logout }) => (
  <div>
    <h1>Home Page</h1>
    {isAuthenticated ? (
      <button onClick={() => logout()}>Logout</button>
    ) : (
      <Link to="/login">Login</Link>
    )}
  </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

// maps state.user.token to this component's props.isAuthenticated
// double !! used to convert variable to boolean
// if there is a token, it'll be true, otherwise it'll be false
function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token,
    logout: PropTypes.func.isRequired
  };
}

export default connect(mapStateToProps, { logout })(HomePage);

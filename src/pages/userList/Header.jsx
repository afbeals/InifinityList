import React from "react";
import PropTypes from "prop-types";

const Header = ({ classname }) => (
  <div className={`${classname}`}>
    <h2>Users:</h2>
  </div>
);

Header.propTypes = {
  classname: PropTypes.string
};

export default Header;

import React from "react";
import PropTypes from "prop-types";

const Header = ({ classname, currentAmount, contentLoaded }) => (
  <div className={`${classname}`}>
    <h2>
      Users:{" "}
      {contentLoaded && currentAmount ? `${currentAmount} found` : `loading...`}
    </h2>
  </div>
);

Header.propTypes = {
  classname: PropTypes.string,
  currentAmount: PropTypes.number,
  contentLoaded: PropTypes.bool
};

export default Header;

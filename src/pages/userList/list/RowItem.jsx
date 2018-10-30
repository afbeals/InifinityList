import React from "react";
import PropTypes from "prop-types";
import _ from "underscore";

class Row extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (this.props.selectedUser !== nextProps.selectedUser &&
      (this.props.itemId === this.props.selectedUser ||
        this.props.itemId === nextProps.selectedUser)) ||
      !_.isEqual(this.props.listData, nextProps.listData)
      ? true
      : false;
  }

  isSelected() {
    const { itemId, selectedUser } = this.props;
    return itemId === selectedUser ? true : false;
  }

  render() {
    const {
      listData: { first_name, last_name },
      selectUserFromList
    } = this.props;
    return (
      <div
        onClick={() => selectUserFromList()}
        className={`${this.props.classname}__item${
          this.isSelected() ? " selected" : ""
        }`}
      >
        <p className={`name`}>
          {last_name}, {first_name}
        </p>
      </div>
    );
  }
}

Row.propTypes = {
  listData: PropTypes.object.isRequired,
  selectUserFromList: PropTypes.func.isRequired,
  classname: PropTypes.string
};

export default Row;

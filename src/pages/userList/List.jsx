import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { List as ReactVList, AutoSizer } from "react-virtualized";
//Local
import RowItem from "./list/RowItem.jsx";
import * as selectors from "../../modules/users/selectors";
import actions from "../../modules/users/actions";

class List extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.rowRenderer = this.rowRenderer.bind(this);
  }

  selectUser(userId) {
    if (userId !== this.props.getSelectedUserId) {
      this.props.handleSelectUser(userId);
      window.alert(
        `You've selected ${this.props.getUserList[userId].last_name}, ${
          this.props.getUserList[userId].first_name
        } with Id = ${userId}`
      );
    }
  }

  getData() {
    const { filteredList } = this.props;
    if (this.props.getIsUserLoaded) {
      return filteredList && filteredList.length > 0
        ? filteredList
        : this.props.getUserArray;
    } else {
      return [];
    }
  }

  rowRenderer({ key, index, isScrolling, style }) {
    const data = this.getData();

    return (
      <div className={`${this.getClassName()}__row`} key={key} style={style}>
        <RowItem
          selectUserFromList={() => this.selectUser(data[index].id)}
          listData={data[index]}
          itemId={data[index].id}
          classname={`${this.getClassName()}__row`}
        />
      </div>
    );
  }

  renderUserList() {
    if (this.props.getIsUserLoading) {
      return <p>loading...</p>;
    } else if (!this.props.getIsUserLoaded) {
      return <div className={`noContent`}>Waiting for users...</div>;
    } else if (this.props.getIsUserLoaded && !this.getData().length) {
      return <div className={`noContent`}>No users Available</div>;
    } else {
      return (
        <AutoSizer>
          {({ width }) => (
            <ReactVList
              propFilList={this.props.filteredList}
              width={width}
              height={250}
              rowHeight={55}
              rowCount={this.getData().length}
              rowRenderer={this.rowRenderer}
            />
          )}
        </AutoSizer>
      );
    }
  }

  getClassName() {
    const { classname } = this.props;
    return `${classname}__list`;
  }

  render() {
    return (
      <div className={`${this.getClassName()}`}>{this.renderUserList()}</div>
    );
  }
}

const mapStateToProps = state => ({
  getIsUserLoading: selectors.getIsUserLoading(state),
  getIsUserLoaded: selectors.getIsUserLoaded(state),
  getSelectedUserId: selectors.getSelectedUserId(state),
  getUserList: selectors.getUserList(state),
  getSelectedUser: selectors.getSelectedUser(state),
  getUserArray: selectors.getUserListInArray(state)
});

const mapDispatchToProps = dispatch => ({
  handleSelectUser: selectedId => {
    dispatch(actions.selectUser(selectedId));
  }
});

List.propTypes = {
  getIsUserLoading: PropTypes.bool.isRequired,
  getIsUserLoaded: PropTypes.bool.isRequired,
  getSelectedUserId: PropTypes.number,
  getUserList: PropTypes.object,
  getUserArray: PropTypes.array,
  getSelectedUser: PropTypes.object,
  handleSelectUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

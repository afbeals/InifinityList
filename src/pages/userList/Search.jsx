import React from "react";
import PropTypes from "prop-types";
import MDCLoader from "../../components/MDCLoader";
import mdcUtility from "../../util/components/mdcUtility";
import StyledButton from "../../components/StyledButton";
import "@material/react-text-field/dist/text-field.css";

class Search extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: ""
    };
  }
  render() {
    const { filterList, resetList, disabled } = this.props;

    return (
      <div className={`${this.props.classname}__filters`}>
        <MDCLoader
          disabled={disabled}
          component={mdcUtility.mdComponents.TEXTFIELD}
          label={`User Name`}
          onChange={e => {
            this.setState({ ...this.state, value: e.target.value });
            filterList(e.target.value);
          }}
          value={this.state.value}
          leadIcon={<i className="fas fa-search" />}
        />
        <StyledButton
          disabled={disabled}
          onClick={() => {
            this.setState({ ...this.state, value: "" });
            resetList();
          }}
        >
          reset
        </StyledButton>
      </div>
    );
  }
}

Search.propTypes = {
  filterList: PropTypes.func.isRequired,
  resetList: PropTypes.func.isRequired,
  classname: PropTypes.string
};

export default Search;

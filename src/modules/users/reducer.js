import actionTypes from "./actionTypes";
import userUtility from "../../util/modules/users/usersUtility";

const initialState = userUtility.buildInitialStore();

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.FETCH_REQUEST: {
      return {
        ...state,
        error: null,
        isLoading: true,
        isLoaded: false
      };
    }

    case actionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        error: null,
        isLoading: false,
        isLoaded: true,
        userList: payload
      };
    }

    case actionTypes.FETCH_FAIL: {
      return {
        ...state,
        error: payload.clientMessage,
        isLoading: false,
        isLoaded: false
      };
    }

    case actionTypes.SELECT_USER: {
      return {
        ...state,
        selectedUser: payload
      };
    }

    case actionTypes.CLEAR_SELECTED_USER: {
      return {
        ...state,
        selectedUser: null
      };
    }

    case actionTypes.CLEAR_USER_LIST: {
      return {
        ...state,
        userList: null
      };
    }

    case actionTypes.RESET: {
      return {
        ...state,
        error: null,
        selectedUser: null,
        userList: null
      };
    }

    default:
      return state;
  }
}

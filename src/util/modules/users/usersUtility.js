import userData from "../../api/data/users";

const usersUtility = {
  /**
   * Returns initial user
   * @method buildInitialUser
   * @return {obj} returns object with initial user props
   */
  buildInitialUser: () => ({
    id: null,
    first_name: null,
    last_name: null,
    email: null,
    gender: null
  }),
  /**
   * Returns initial store
   * @method buildInitialStore
   * @return {obj} returns object with initial store props
   */
  buildInitialStore: () => ({
    error: null,
    isLoading: false,
    isLoaded: false,
    selectedUser: null,
    userList: null
  }),
  /**
   * Returns mock users
   * @method buildMockUserList
   * @param {object} props addtional props insert alongside mock data.
   * @return {obj} returns mock list
   */
  buildMockUserList: (props = []) => {
    const mockUsers = [...userData.users, ...props];
    return mockUsers;
  },
  /**
   * Returns mock store
   * @method buildMockStore
   * @param {object} props addtional props insert alongside mock data.
   * @return {object} returns mock store
   */
  buildMockStore: (props = {}) => {
    return {
      ...usersUtility.buildMockStore(),
      userList: usersUtility.buildMockUserList,
      props
    };
  }
};

export default usersUtility;

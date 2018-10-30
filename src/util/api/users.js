import userUtil from "../modules/users/usersUtility";

export const fetchUsers = ({
  request = {},
  mockProps = [],
  shouldFail = false
}) => {
  return new Promise((res, rej) => {
    window.setTimeout(() => {
      if (shouldFail) {
        rej();
      } else {
        res({
          data: userUtil.buildMockUserList(mockProps),
          mockRequest: request
        });
      }
    }, 1500);
  });
};

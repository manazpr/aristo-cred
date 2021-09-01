const checkLogin = (currentUser) =>
  !!currentUser &&
  currentUser?.constructor === Object &&
  Object.keys(currentUser).length !== 1;
export default checkLogin;

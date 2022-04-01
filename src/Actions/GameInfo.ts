var updateUserName: any;

export default updateUserName = (userName: string) => ({
  type: 'UPDATE_USERNAME',
  payload: userName,
});

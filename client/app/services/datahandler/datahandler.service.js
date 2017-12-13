
class DataHandlerService {
  /* @ngInject */
  constructor($localStorage) {
    this.localStorage = $localStorage;
    this.users = this.thereAreUsers() ? this.getUSersFromLocalStorage() : [];
    this.selectedRow = null;
    this.selectedUserData = null;
  }
  saveUserInLocalStorage(user) {
    this.users.push({
      name: user.name,
      email: user.email,
      phone: user.phone,
      message: user.message,
    });
    this.localStorage.users = this.users;
  }
  getUSersFromLocalStorage() {
    return this.localStorage.users;
  }
  thereAreUsers() {
    return this.getUSersFromLocalStorage() !== undefined;
  }
  parseFromLocalstorageToHandsonTable(usersData) {
    const users = this.getUSersFromLocalStorage();
    const usersArray = usersData;
    for (let i = 0; i < users.length; i++) {
      usersArray.push([users[i].name, users[i].email, users[i].phone, users[i].message]);
    }
    return usersArray;
  }
  setSelectedRowData(index, selectedUserData) {
    this.selectedRow = index;
    this.selectedUserData = selectedUserData;
  }
  getSelectedRow() {
    return this.selectedRow;
  }
  getSelectedUserData() {
    return this.selectedUserData;
  }
  updateUserInLocalStorage(userUpdatedData) {
    const usersList = this.getUSersFromLocalStorage();
    const updateIndex = this.getSelectedRow();
    usersList[updateIndex] = userUpdatedData;
    this.localStorage.users = usersList;
  }
}

export default DataHandlerService;

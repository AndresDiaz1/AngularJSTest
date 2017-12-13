
class DataHandlerService {
  /* @ngInject */
  constructor($localStorage) {
    this.users = [];
    this.localStorage = $localStorage;
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
  parseFromLocalstorageToHandsonTable(usersData) {
    let users = this.getUSersFromLocalStorage();
    let usersArray = usersData;
    for (let i=0; i < users.length; i++){
      usersArray.push([users[i].name, users[i].email, users[i].phone, users[i].message]);
    }
    return usersArray;
  }
}

export default DataHandlerService;

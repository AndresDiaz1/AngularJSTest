
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
}

export default DataHandlerService;

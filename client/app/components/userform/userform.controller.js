class UserformController {
  /* @ngInject */
  constructor(DataHandler, $localStorage) {
    this.name = 'userform';
    this.services = {
      dataHandler: DataHandler,
    };
    this.user = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
    this.localStorage = $localStorage;
  }
  submit(user) {
    this.services.dataHandler.saveUserInLocalStorage(user, this.localStorage);
  }
  getLocalStorage() {
    console.log('presiono get de local storage', this.localStorage.users);
  }
}

export default UserformController;

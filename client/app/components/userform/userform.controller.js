class UserformController {
  /* @ngInject */
  constructor(DataHandler) {
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
  }
  submit(user) {
    this.services.dataHandler.saveUserInLocalStorage(user);
  }
  getLocalStorage() {
    console.log('Los usuarios son ', this.services.dataHandler.getUSersFromLocalStorage());
  }
}

export default UserformController;

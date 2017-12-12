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
    this.storage = $localStorage.$default({
      counter: 42,
    });
    this.services.dataHandler.printSomthing();
  }
  submit(user) {
    console.log('presiono enviar', user);
  }
  getLocalStorage() {
    console.log('presiono get de local storage', this.localStorage.counter);
  }
}

export default UserformController;

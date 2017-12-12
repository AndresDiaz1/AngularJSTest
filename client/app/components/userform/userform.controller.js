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
    this.services.dataHandler.printSomthing();
  }
  submit(user) {
    console.log('presiono enviar', user);
  }
}

export default UserformController;

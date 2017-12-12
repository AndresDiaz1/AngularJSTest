class UserformController {
  constructor() {
    this.name = 'userform';
    this.vm = {};
    this.vm.user = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
  }
  submit(user) {
    console.log('presiono enviar', user);
  }
}

export default UserformController;

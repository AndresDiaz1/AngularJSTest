class UserformController {
  constructor() {
    this.name = 'userform';
    this.user = {
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

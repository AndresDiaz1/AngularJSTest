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

  $onInit() {
    if (this.isEditing()) {
      this.setUserDataInForm();
      console.log("El usuario que eligio es", this.user);
    }
  }

  isEditing() {
    return this.services.dataHandler.getSelectedRow() != null;
  }

  setUserDataInForm() {
    const userData = this.services.dataHandler.getSelectedUserData();
    this.user.name = userData[0];
    this.user.email = userData[1];
    this.user.phone = userData[2];
    this.user.message = userData[3];

    document.getElementById('Name').value = this.user.name;
    document.getElementById('email').value = this.user.email;
    document.getElementById('phone').value = this.user.phone;
    document.getElementById('message').value = this.user.message;

  }

  submit(user) {
    this.user.name = document.getElementById('Name').value;
    this.user.email = document.getElementById('email').value;
    this.user.phone = document.getElementById('phone').value;
    this.user.message = document.getElementById('message').value;
    this.services.dataHandler.saveUserInLocalStorage(this.user);
  }
}

export default UserformController;

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
  }

  submit(user) {
    this.services.dataHandler.saveUserInLocalStorage(user);
  }
}

export default UserformController;

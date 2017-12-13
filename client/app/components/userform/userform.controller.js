class UserformController {
  /* @ngInject */
  constructor(DataHandler) {
    this.name = 'userform';
    this.services = {
      dataHandler: DataHandler,
    };
    this.user = {};
    this.resetForm();
  }

  $onInit() {
    if (this.isEditing()) {
      this.setUserDataInForm();
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
    this.resetForm();
  }

  update(user) {
    this.services.dataHandler.updateUserInLocalStorage(user);
    this.services.dataHandler.setSelectedRowData(null, null);
    this.resetForm();
  }
  resetForm() {
    this.user = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
  }
}

export default UserformController;

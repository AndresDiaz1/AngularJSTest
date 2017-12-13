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

  submit() {
    this.user = this.getDataFromForm();
    this.services.dataHandler.saveUserInLocalStorage(this.user);
    this.resetForm();
  }

  update() {
    const userUpdated = this.getDataFromForm();
    this.services.dataHandler.updateUserInLocalStorage(userUpdated);
    this.services.dataHandler.setSelectedRowData(null, null);
    this.resetForm();
  }

  getDataFromForm() {
    return {
      name: document.getElementById('Name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      message: document.getElementById('message').value,
    };
  }

  resetForm() {
    document.getElementById('Name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
  }
}


export default UserformController;

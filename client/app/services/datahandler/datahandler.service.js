
class DataHandlerService {
  constructor() {
    this.users = [];
  }
  saveUserInLocalStorage(user, localStorage) {
    this.users.push({
      name: user.name,
      email: user.email,
      phone: user.phone,
      message: user.message,
    });
    console.log('Los usuarios son', this.users);
    localStorage.users = this.users;
    console.log('imprime desde el servicio');
  }
}

export default DataHandlerService;


class DataHandlerService {
  /* @ngInject */
  constructor($localStorage) {
    this.localStorage = $localStorage;
    this.users = this.thereAreUsers() ? this.getUSersFromLocalStorage() : [];
  }
  saveUserInLocalStorage(user) {
    this.users.push({
      name: user.name,
      email: user.email,
      phone: user.phone,
      message: user.message,
    });
    this.localStorage.users = this.users;
  }
  getUSersFromLocalStorage() {
    return this.localStorage.users;
  }
  thereAreUsers() {
    return this.getUSersFromLocalStorage() !== undefined;
  }
  parseFromLocalstorageToHandsonTable(usersData) {
    let users = this.getUSersFromLocalStorage();
    let usersArray = usersData;
    for (let i=0; i < users.length; i++){
      usersArray.push([users[i].name, users[i].email, users[i].phone, users[i].message]);
    }
    return usersArray;
  }
  setSelectedRowData(index,selectedUserData){
    console.log("desde el servicio llega el indice", index);
    console.log("desde el servicio llega la data", selectedUserData);
    
  }
}

export default DataHandlerService;

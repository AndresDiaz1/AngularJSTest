import Handsontable from 'handsontable-pro';

class HandsontableController {
  /* @ngInject */
  constructor(DataHandler) {
    this.name = 'handsontable';
    this.services = {
      dataHandler: DataHandler,
    };
    this.tableHeader = ['Nombre', 'Email', 'Teléfono', 'Mensaje'];
  }

  $onInit() {
    let users = this.services.dataHandler.parseFromLocalstorageToHandsonTable();
    const usersData = [];
     usersData.push(this.tableHeader);
     for(let i=0; i<users.length; i++){
       usersData.push(users[i]);
     }

    const container = document.getElementById('usersTable');
    const usersTable = new Handsontable(container, {
      data: usersData,
      rowHeaders: true,
      colHeaders: true,
      filters: true,
      dropdownMenu: true,
    });
  }
}

export default HandsontableController;

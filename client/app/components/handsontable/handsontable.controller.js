import Handsontable from 'handsontable-pro';

class HandsontableController {
  /* @ngInject */
  constructor(DataHandler) {
    this.name = 'handsontable';
    this.services = {
      dataHandler: DataHandler,
    };
    this.tableHeader = ['Nombre', 'Email', 'Teléfono', 'Mensaje'];
    this.thereAreUsers = false;
  }

  $onInit() {
    if (this.services.dataHandler.thereAreUsers()) {
      this.thereAreUsers = true;
      this.createHandsonTable();
    }
  }
  createHandsonTable() {
    let usersData = [];
    usersData.push(this.tableHeader);
    usersData = this.services.dataHandler.parseFromLocalstorageToHandsonTable(usersData);
    const container = document.getElementById('usersTable');
    const usersTable = new Handsontable(container, {
      data: usersData,
      rowHeaders: true,
      colHeaders: true,
      filters: true,
      dropdownMenu: true,
      afterSelection: function(row,col) {
        let data = this.getDataAtRow(row);
        console.log('la data', data);
      },
    });
  }
}

export default HandsontableController;

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
    this.hasMadeSelection = false;
  }
  $onInit() {
    this.hasMadeSelection = false;
    if (this.services.dataHandler.thereAreUsers()) {
      this.thereAreUsers = true;
      this.createHandsonTable();
    }
  }
  createHandsonTable() {
    let usersData = [];
    usersData = this.services.dataHandler.parseFromLocalstorageToHandsonTable(usersData);
    const container = document.getElementById('usersTable');
    const usersTable = new Handsontable(container, {
      data: usersData,
      rowHeaders: true,
      colHeaders: this.tableHeader,
    });

    usersTable.addHook('afterSelection', (r) => {
      if (r != undefined){
        this.hasMadeSelection=true;
        this.services.dataHandler.setSelectedRowData(r, usersTable.getDataAtRow(r));
      }
    });
  }
}

export default HandsontableController;

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
    this.Idex=0;
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
    usersData.push(this.tableHeader);
    usersData = this.services.dataHandler.parseFromLocalstorageToHandsonTable(usersData);
    const container = document.getElementById('usersTable');
    let usersTable = new Handsontable(container, {
      data: usersData,
      rowHeaders: true,
      colHeaders: true,
      filters: true,
      dropdownMenu: true,
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

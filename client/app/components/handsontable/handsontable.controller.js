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
      // afterSelection: (row)=> {
      //   this.hasMadeSelection = true;
      //   console.log("Selcciono", this.hasMadeSelection);
      // //   let data = this.getDataAtRow(row);
      // //   console.log('la data', data + ' y el indice', row);
      //  },
    });

    usersTable.addHook('afterSelection',(r)=>{
      this.hasMadeSelection=true;
      console.log("presiono", r);
      this.llamar(r);
    })
  }
  llamar(r){
    this.hasMadeSelection=true;
    console.log("eta lmamadno la funcion de afuera", r);
    this.Idex=r;
    console.log(this.Idex)
  }
}

export default HandsontableController;

import Handsontable from 'handsontable-pro';

class HandsontableController {
  constructor() {
    this.name = 'handsontable';
  }

  $onInit() {
    const tableHeader = ['Nombre', 'Email', 'Teléfono', 'Mensaje'];
    const usersData = [
      tableHeader,
      ['2017', 10, 11, 12, 13],
      ['2018', 20, 11, 14, 13],
      ['2019', 30, 15, 12, 13],
    ];

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

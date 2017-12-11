import Handsontable from 'handsontable-pro';

class HomeController {
  constructor() {
    this.name = 'home';
    this.data = [
      ['', 'Ford', 'Tesla', 'Toyota', 'Honda'],
      ['2017', 10, 11, 12, 13],
      ['2018', 20, 11, 14, 13],
      ['2019', 30, 15, 12, 13],
    ];

    this.container = document.getElementById('example');
    this.hot = new Handsontable(this.container, {
      data: this.data,
      rowHeaders: true,
      colHeaders: true,
      filters: true,
      dropdownMenu: true,
    });
  }
}

export default HomeController;

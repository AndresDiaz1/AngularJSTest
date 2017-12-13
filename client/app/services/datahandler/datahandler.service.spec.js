import DataHandler from './datahandler.service';

describe('DataHandler Service', () => {
  /** @type {DataHandler} */
  let dataHandlerService
  let localstorage;
  beforeEach(() => {
    localstorage = {
      users: () => { return undefined; },
    }
    dataHandlerService = new DataHandler(localstorage);
  });

  it('should return selectedRow when calls method getSelectedRow', () => {
    dataHandlerService.selectedRow = 0;
    expect(dataHandlerService.getSelectedRow()).toEqual(0);
  });
});

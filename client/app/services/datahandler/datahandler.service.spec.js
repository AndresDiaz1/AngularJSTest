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

  it('should push on users array new user when calls method saveUserInLocalStorage', () => {
    dataHandlerService.users = [];
    dataHandlerService.saveUserInLocalStorage({name: 'test', email: 'test@test', phone: 123, message: 'test message' });
    expect(dataHandlerService.users.length).toEqual(1);
  });

  it('should return selectedRow when calls method getSelectedRow', () => {
    dataHandlerService.selectedRow = 0;
    expect(dataHandlerService.getSelectedRow()).toEqual(0);
  });
});

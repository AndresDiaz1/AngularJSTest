import page from './home.po';

const config = browser.params;

describe('Home Section', () => {
  beforeEach(() => {
    browser.get(`${config.baseUrl}/`);
  });

  it('should include controller title as home', () => {
    expect(page.h1El.getText()).toBe('home');
  });

  it('should be navbar as title', () => {
    expect(page.navbarLogo.getText()).toBe('navbar');
  });
});

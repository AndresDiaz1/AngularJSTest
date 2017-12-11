/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

class HomeSection {
  constructor() {
    this.h1El = element(by.css('.title'));
    this.navbar = element(by.css('nav'));
    this.navbarLogo = this.navbar.element(by.css('.logo h1 a'));
  }
}

export default new HomeSection();

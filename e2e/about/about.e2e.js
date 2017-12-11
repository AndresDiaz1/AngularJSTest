import page from './about.po';

const config = browser.params;

describe('About Section', () => {
  beforeEach(() => {
    browser.get(`${config.baseUrl}/about`);
  });

  it('should include controller title as about', () => {
    expect(page.h1El.getText()).toBe('about');
  });
});

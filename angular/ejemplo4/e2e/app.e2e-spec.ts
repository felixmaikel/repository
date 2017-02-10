import { Ejemplo4Page } from './app.po';

describe('ejemplo4 App', function() {
  let page: Ejemplo4Page;

  beforeEach(() => {
    page = new Ejemplo4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

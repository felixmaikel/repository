import { Ejemplo8Page } from './app.po';

describe('ejemplo8 App', function() {
  let page: Ejemplo8Page;

  beforeEach(() => {
    page = new Ejemplo8Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

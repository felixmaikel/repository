import { Ejemplo2Page } from './app.po';

describe('ejemplo2 App', function() {
  let page: Ejemplo2Page;

  beforeEach(() => {
    page = new Ejemplo2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { Ejemplo7Page } from './app.po';

describe('ejemplo7 App', function() {
  let page: Ejemplo7Page;

  beforeEach(() => {
    page = new Ejemplo7Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

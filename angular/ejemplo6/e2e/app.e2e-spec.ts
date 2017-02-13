import { Ejemplo6Page } from './app.po';

describe('ejemplo6 App', function() {
  let page: Ejemplo6Page;

  beforeEach(() => {
    page = new Ejemplo6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

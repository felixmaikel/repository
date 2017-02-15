import { Ejemplo61Page } from './app.po';

describe('ejemplo61 App', function() {
  let page: Ejemplo61Page;

  beforeEach(() => {
    page = new Ejemplo61Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

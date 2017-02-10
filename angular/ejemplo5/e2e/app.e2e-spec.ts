import { Ejemplo5Page } from './app.po';

describe('ejemplo5 App', function() {
  let page: Ejemplo5Page;

  beforeEach(() => {
    page = new Ejemplo5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { Ejercicio2Page } from './app.po';

describe('ejercicio2 App', function() {
  let page: Ejercicio2Page;

  beforeEach(() => {
    page = new Ejercicio2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { Ejercicio3Page } from './app.po';

describe('ejercicio3 App', function() {
  let page: Ejercicio3Page;

  beforeEach(() => {
    page = new Ejercicio3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

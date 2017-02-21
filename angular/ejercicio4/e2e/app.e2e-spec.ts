import { Ejercicio4Page } from './app.po';

describe('ejercicio4 App', function() {
  let page: Ejercicio4Page;

  beforeEach(() => {
    page = new Ejercicio4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

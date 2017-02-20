import { Ejemplo9Page } from './app.po';

describe('ejemplo9 App', function() {
  let page: Ejemplo9Page;

  beforeEach(() => {
    page = new Ejemplo9Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

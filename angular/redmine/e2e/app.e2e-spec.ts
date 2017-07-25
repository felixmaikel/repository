import { RedminePage } from './app.po';

describe('redmine App', function() {
  let page: RedminePage;

  beforeEach(() => {
    page = new RedminePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

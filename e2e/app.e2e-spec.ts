import { PwaPocPage } from './app.po';

describe('pwa-poc App', () => {
  let page: PwaPocPage;

  beforeEach(() => {
    page = new PwaPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

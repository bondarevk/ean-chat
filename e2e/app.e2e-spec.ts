import { EanChatPage } from './app.po';

describe('ean-chat App', () => {
  let page: EanChatPage;

  beforeEach(() => {
    page = new EanChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

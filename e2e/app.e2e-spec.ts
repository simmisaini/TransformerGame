import { TransformerWarPage } from './app.po';

describe('transformer-war App', function() {
  let page: TransformerWarPage;

  beforeEach(() => {
    page = new TransformerWarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

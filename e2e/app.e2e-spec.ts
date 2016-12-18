import { FirebaseauthsamplePage } from './app.po';

describe('firebaseauthsample App', function() {
  let page: FirebaseauthsamplePage;

  beforeEach(() => {
    page = new FirebaseauthsamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

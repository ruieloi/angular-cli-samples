import { AngularCliAuth0Page } from './app.po';

describe('angular-cli-auth0 App', () => {
  let page: AngularCliAuth0Page;

  beforeEach(() => {
    page = new AngularCliAuth0Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to re!!');
  });
});

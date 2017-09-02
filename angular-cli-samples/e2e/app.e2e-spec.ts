import { AngularCliSamplesPage } from './app.po';

describe('angular-cli-samples App', () => {
  let page: AngularCliSamplesPage;

  beforeEach(() => {
    page = new AngularCliSamplesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to RE!!');
  });
});

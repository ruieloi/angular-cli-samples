import { AngularInternacionalizationPage } from './app.po';

describe('angular-internacionalization App', () => {
  let page: AngularInternacionalizationPage;

  beforeEach(() => {
    page = new AngularInternacionalizationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to RE!!');
  });
});

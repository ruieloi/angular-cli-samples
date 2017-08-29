import { AngularCliMaterialDesignPage } from './app.po';

describe('angular-cli-material-design App', () => {
  let page: AngularCliMaterialDesignPage;

  beforeEach(() => {
    page = new AngularCliMaterialDesignPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to re!!');
  });
});

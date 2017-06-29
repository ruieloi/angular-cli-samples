import { browser, by, element } from 'protractor';

export class AngularCliMaterialDesignPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('re-root h1')).getText();
  }
}

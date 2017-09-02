import { browser, by, element } from 'protractor';

export class AngularCliSamplesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('RE-root h1')).getText();
  }
}

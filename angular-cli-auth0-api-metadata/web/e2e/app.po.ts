import { browser, by, element } from 'protractor';

export class AngularCliAuth0Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('re-root h1')).getText();
  }
}

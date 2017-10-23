import { browser, by, element } from 'protractor';

export class AngularInternacionalizationPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('RE-root h1')).getText();
  }
}

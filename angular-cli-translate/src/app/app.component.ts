import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private translate: TranslateService
  ) {

    this.configTranslator();
  }

  configTranslator() {
    this.translate.addLangs(['en', 'pt', 'es', 'fr']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|pt|es|fr/) ? browserLang : 'en');
  }

  changeLang(language: string) {
    this.translate.use(language);
  }


}

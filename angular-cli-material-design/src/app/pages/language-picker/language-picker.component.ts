import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss']
})
export class LanguagePickerComponent implements OnInit {

  constructor(private translate: TranslateService, mdIconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    mdIconRegistry
        .addSvgIcon('flag-pt',
            sanitizer.bypassSecurityTrustResourceUrl('/assets/icon/flags/4x3/pt.svg'))
        .addSvgIcon('flag-en',
            sanitizer.bypassSecurityTrustResourceUrl('/assets/icon/flags/4x3/gb.svg'))
         .addSvgIcon('flag-fr',
            sanitizer.bypassSecurityTrustResourceUrl('/assets/icon/flags/4x3/fr.svg'));

            this.configTranslator();
  }

  ngOnInit() {
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

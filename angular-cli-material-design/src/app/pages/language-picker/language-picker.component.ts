import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss']
})
export class LanguagePickerComponent implements OnInit {

  constructor(mdIconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    mdIconRegistry
        .addSvgIcon('flag-pt',
            sanitizer.bypassSecurityTrustResourceUrl('/assets/icon/flags/4x3/pt.svg'))
        .addSvgIcon('flag-en',
            sanitizer.bypassSecurityTrustResourceUrl('/assets/icon/flags/4x3/gb.svg'))
         .addSvgIcon('flag-fr',
            sanitizer.bypassSecurityTrustResourceUrl('/assets/icon/flags/4x3/fr.svg'));

  }

  ngOnInit() {
  }

}

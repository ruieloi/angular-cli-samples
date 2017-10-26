import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatListModule, MatToolbarModule, MatSidenavModule, MatIconModule,
        MatCardModule, MatMenuModule} from '@angular/material';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule
  ],
  declarations: []
})
export class MaterialModule { }

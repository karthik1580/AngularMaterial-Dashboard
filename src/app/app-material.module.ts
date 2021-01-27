import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

const MaterialModules = [
  MatCheckboxModule,
  MatRadioModule,
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatDividerModule,
  MatListModule
]

@NgModule({
  declarations: [],
  imports: [
    MaterialModules
  ],exports: [
    MaterialModules
  ]
})
export class AppMaterialModule { }

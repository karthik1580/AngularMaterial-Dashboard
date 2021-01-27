import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppMaterialModule } from '../app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

const includeComponents = [
  HeaderComponent,
  FooterComponent,
  SidebarComponent
]

@NgModule({
  declarations: [    
    includeComponents    
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule

  ],
  exports: [
    includeComponents
  ]
})
export class SharedModule { }

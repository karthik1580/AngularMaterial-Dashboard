import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';


const includeComponents = [
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  AreaComponent
]

@NgModule({
  declarations: [    
    includeComponents    
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule,
    RouterModule,
    HighchartsChartModule

  ],
  exports: [
    includeComponents
  ]
})
export class SharedModule { }

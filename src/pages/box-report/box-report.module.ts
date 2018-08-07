import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoxReportPage } from './box-report';

@NgModule({
  declarations: [
    BoxReportPage,
  ],
  imports: [
    IonicPageModule.forChild(BoxReportPage),
  ],
  exports: [
    BoxReportPage
  ]
})
export class BoxReportPageModule {}

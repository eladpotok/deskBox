import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowInMapPage } from './show-in-map';
 import { GlobalPageModule } from '../../global.module'

@NgModule({
  declarations: [
    ShowInMapPage,
    
  ],
  imports: [
    IonicPageModule.forChild(ShowInMapPage),GlobalPageModule
  ],
  exports: [
    ShowInMapPage
  ]
})
export class ShowInMapPageModule {}

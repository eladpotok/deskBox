import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowInMapPage } from './show-in-map';
import { GoogleMapComponent } from '../../components/google-map/google-map'

@NgModule({
  declarations: [
    ShowInMapPage,
    GoogleMapComponent
  ],
  imports: [
    IonicPageModule.forChild(ShowInMapPage),
  ],
  exports: [
    ShowInMapPage
  ]
})
export class ShowInMapPageModule {}

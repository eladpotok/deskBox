import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyBoxesPage } from './my-boxes';
import { GoogleMapComponent } from '../../components/google-map/google-map'

@NgModule({
  declarations: [
    MyBoxesPage,GoogleMapComponent
  ],
  imports: [
    IonicPageModule.forChild(MyBoxesPage),
  ],
  exports: [
    MyBoxesPage
  ]
})
export class MyBoxesPageModule {}

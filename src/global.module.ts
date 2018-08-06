import { NgModule } from '@angular/core';
import { GoogleMapComponent } from './components/google-map/google-map';

@NgModule({
  declarations: [
    GoogleMapComponent,
  ],
  exports : [
    GoogleMapComponent
  ],
  
})
export class GlobalPageModule {}

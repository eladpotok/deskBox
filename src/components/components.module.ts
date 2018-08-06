import { NgModule } from '@angular/core';
import { TimerComponent } from './timer/timer';
import { GoogleMapComponent } from './google-map/google-map';

@NgModule({
	declarations: [TimerComponent,
    GoogleMapComponent,
    ],
	imports: [ ],
	exports: [TimerComponent,
    GoogleMapComponent,
    ]
})
export class ComponentsModule {}

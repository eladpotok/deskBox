import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstructionsPage } from './instructions';

@NgModule({
  declarations: [
    InstructionsPage,
  ],
  imports: [
    IonicPageModule.forChild(InstructionsPage),
  ],
})
export class InstructionsPageModule {}

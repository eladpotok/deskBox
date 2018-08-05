import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllCharityBoxesPage } from './all-charity-boxes';

@NgModule({
  declarations: [
    AllCharityBoxesPage,
  ],
  imports: [
    IonicPageModule.forChild(AllCharityBoxesPage),
  ],
  exports: [
    AllCharityBoxesPage
  ]
})
export class AllCharityBoxesPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewBoxPage } from './add-new-box';

@NgModule({
  declarations: [
    AddNewBoxPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewBoxPage),
  ],
  exports: [
    AddNewBoxPage
  ]
})
export class AddNewBoxPageModule {}

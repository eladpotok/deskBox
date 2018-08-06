import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyBoxesPage } from './my-boxes';
import { GlobalPageModule } from '../../global.module'

@NgModule({
  declarations: [
    MyBoxesPage, 
  ],
  imports: [
    IonicPageModule.forChild(MyBoxesPage),GlobalPageModule
  ],
  exports: [
    MyBoxesPage
  ]
})
export class MyBoxesPageModule {}

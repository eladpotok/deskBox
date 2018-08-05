import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyBoxesPage } from './my-boxes';

@NgModule({
  declarations: [
    MyBoxesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyBoxesPage),
  ],
  exports: [
    MyBoxesPage
  ]
})
export class MyBoxesPageModule {}

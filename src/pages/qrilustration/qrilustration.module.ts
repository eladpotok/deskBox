import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrilustrationPage } from './qrilustration';
import { GlobalPageModule } from '../../global.module'

@NgModule({
  declarations: [
    QrilustrationPage,
  ],
  imports: [
    IonicPageModule.forChild(QrilustrationPage),
  ],
  exports: [
    QrilustrationPage
  ]
})
export class QrilustrationPageModule {}

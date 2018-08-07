import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QrilustrationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-qrilustration',
  templateUrl: 'qrilustration.html',
})
export class QrilustrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  imgUrl :"https://en.wikipedia.org/wiki/Portable_Network_Graphics#/media/File:PNG_transparency_demonstration_1.png"
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad QrilustrationPage');
  }


  public reportStatus(){

    this.navCtrl.push("BoxReportPage");
  }



}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BoxDescription } from '../../Models/BoxDescription';

/**
 * Generated class for the ShowInMapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-show-in-map',
  templateUrl: 'show-in-map.html',
})
export class ShowInMapPage {


  xCollection: number[]= [];
  yCollection: number[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var myBoxes = this.navParams.get('myBoxes');


    for(let i=0; i< myBoxes.length;i++){
      this.xCollection.push(myBoxes[i].latitude);
      this.yCollection.push(myBoxes[i].longitude);
    }
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowInMapPage');
  }

}

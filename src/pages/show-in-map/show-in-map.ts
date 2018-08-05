import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleMapComponent } from '../../components/google-map/google-map';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowInMapPage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Server } from '../../services/server.service';


/**
 * Generated class for the AddNewBoxPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-new-box',
  templateUrl: 'add-new-box.html',
})
export class AddNewBoxPage {

  ownerName: String;
  ownerPhone: String;
  ownerPosition: String;
  boxName: String;
  latitude: number;
  longitude: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public server: Server) {

        this.latitude = 30;
        this.longitude = 40;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewBoxPge');
  }

  addBox(){
    console.log("printing" + this.ownerName);
    this.server.addBox(this.ownerName, this.boxName, this.latitude, this.longitude, this.ownerPhone)
              .then(function(response) {
      return response.json();
    })
    .then(response => {
      console.log(response);
    });
  }

}

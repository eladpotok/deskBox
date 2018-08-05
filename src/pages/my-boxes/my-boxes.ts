import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Server } from '../../services/server.service';
import { BoxDescription } from '../../Models/BoxDescription';


@IonicPage()
@Component({
  selector: 'page-my-boxes',
  templateUrl: 'my-boxes.html',
})
export class MyBoxesPage {

  myBoxes: BoxDescription[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public server: Server) {
      server.getBoxes().then(function(response) {
        return response.json();
      })
      .then(response => {
        console.log(response);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyBoxesPage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Server } from '../../services/server.service';
import { BoxDescription } from '../../Models/BoxDescription';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-my-boxes',
  templateUrl: 'my-boxes.html',
})
export class MyBoxesPage {

  myBoxes: BoxDescription[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public server: Server,
              public alert: AlertController) {
      server.getBoxes().then(function(response) {
        return response.json();
      })
      .then(response => {
        console.log(response);
        this.myBoxes = (<any>Object).values(response.Boxes).map(box => <BoxDescription>box);
        
      });

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyBoxesPage');
  }

  remove(){
    const prompt = this.alert.create({
      title: 'Are you sure that you want to remove the box?',
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  askStatus(box: BoxDescription) {
    const prompt = this.alert.create({
      message: 'Ask ' + box.boxName + ' For Box Status?',
      title: 'Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ask',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  public showInMap(){
    this.navCtrl.push("ShowInMapPage");
  }

  public choose(box: BoxDescription){
    box.isExpanded = !box.isExpanded;
  }


}

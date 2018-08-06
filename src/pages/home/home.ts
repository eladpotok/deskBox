import { Component, NgModule } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



      
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {


  }

  public showBoxes(){

    this.navCtrl.push("MyBoxesPage");
  }

  public addBox(){

    this.navCtrl.push("AddNewBoxPage");

  }

  public openCredentials(){
    this.navCtrl.push("LoginPage");
  }
  





  

}


import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


      
  constructor(public navCtrl: NavController) {


  }

  public showBoxes(){

    // fetch all coordinates from server

    this.navCtrl.push("MyBoxesPage");
  }

  public addBox(){

    this.navCtrl.push("AddNewBoxPage");

  }
  





  

}


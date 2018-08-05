import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController, ViewController  } from 'ionic-angular';
import { RoomModel } from '../../Models/room.model'
import { UserModel } from '../../Models/user.model'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Platform } from 'ionic-angular';
import {AngularFireAuth } from 'angularfire2/auth'
import { Observable } from 'rxjs/Observable';
import { CardModel }  from '../../Models/card.model';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { SettingsModel } from '../../Models/settings.model';
import * as firebase from 'firebase';
import { AuthService } from '../../services/auth.service';
import { MessagesService } from '../../services/messages.service';
import { RoomsService } from '../../services/rooms.service';
import { CategoryModel, MemberModel } from '../../Models/category.model';
import { UrlSerializer } from 'ionic-angular/navigation/url-serializer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


      
  constructor(public navCtrl: NavController) {

    


  }

  public showBoxes(){

    // fetch all coordinates from server

    this.navCtrl.push("AllCharityBoxesPage");
  }

  public addBox(){

    this.navCtrl.push("AddNewBoxPage");

  }
  





  

}


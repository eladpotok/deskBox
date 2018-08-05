import { Injectable } from '@angular/core';
import { BoxDescription } from '../Models/BoxDescription';

 @Injectable()
 export class Server {

    http: String;
    
    constructor() {
        this.http = "http://192.168.2.211:8080";
    }

    public addBox(ownerName: String, boxName: String, lat: number, long: number, phone: String) : Promise<Response> {
        let url = this.http + "/AddBox?"
        url += "OwnerName=" + ownerName;
        url += "&";
        url += "BoxName=" + boxName;
        url += "&";
        url += "Latitude=" + lat;
        url += "&";
        url += "Longitude=" + long;
        url += "&";
        url += "Phone=" + phone;
        console.log(url);
        return fetch(url);
    }

    public getBoxes() : Promise<Response> {
        let url = this.http + "/GetAllBoxes?";
        
        return fetch(url);

    }
   

 }

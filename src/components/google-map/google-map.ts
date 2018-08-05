import { Component, ViewChild, Input } from '@angular/core';

declare var google: any;

@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {
  @ViewChild("map") mapElement;
  text: string;
  map: any;

  @Input() x: any;
  @Input() y: any;

  constructor() {
    console.log(this.x);
    this.text = 'Hello World';
  }


  ngOnInit(){
    console.log("map is on init");
    this.initMap();
  }

  initMap(){

    console.log(this.x);
    let coords = new google.maps.LatLng(this.x,this.y);
    let mapOptions = {
      center: coords,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    let marker = new google.maps.Marker( {
      map: this.map,
      position: coords
    })
    
  }


    
  
  

}

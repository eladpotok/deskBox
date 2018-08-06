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
  @Input() label: any;
  @Input() xCollection: any;
  @Input() yCollection: any;

  constructor() {
    this.text = 'Hello World';
  }


  ngOnInit(){
    this.initMap();
  }

  initMap(){

    if(this.xCollection != null){
      this.initMultipleMap();
      return;
    }

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
      label: this.label,
      position: coords
    })
    
  }
  
  initMultipleMap(){
    let coords = new google.maps.LatLng(this.xCollection[0],this.yCollection[0]);
    let mapOptions = {
      center: coords,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let markerCoodinate: Number[];
    for (var _i = 0; _i < this.xCollection.length; _i++) {
      var x = this.xCollection[_i];
      var y = this.yCollection[_i];
      var coordinate = new google.maps.LatLng(x, y);
      let marker = new google.maps.Marker( {
        map: this.map,
        label: this.label,
        position: coordinate
      })
  }
    
    
  }
  

}

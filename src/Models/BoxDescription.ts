import { BaseModel } from './base.model';

export class BoxDescription extends BaseModel {
     ownerName: string
     phone: string;
     boxName: String;
     lastPickUp: String;
     isFull: Boolean;
     fullSince: String;
     address: String;
     longitude: string;
     latitude: string;
     isExpanded: Boolean;
}
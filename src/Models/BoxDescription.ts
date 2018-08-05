import { BaseModel } from './base.model';

export class BoxDescription extends BaseModel {
     OwnerName: string
     OwnerPhone: string;
     BoxName: String;
     LastPickUp: Date;
     IsFull: Boolean;
}
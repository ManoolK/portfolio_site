import { LightningElement, api } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/images';

export default class Hero extends LightningElement {
    funImageURL = IMAGES + '/fun-lines.png';
    personImageURL = IMAGES + '/003.jpg';
    @api title;
    @api titleSecond;
    @api funText;
    @api smallText;
    @api showButton1;
    @api showButton2;
}
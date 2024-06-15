import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/images';

export default class Hero extends LightningElement {
    personImageURL = IMAGES + '/003.jpg';
}
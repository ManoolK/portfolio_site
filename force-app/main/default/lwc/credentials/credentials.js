import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/images';

export default class Credentials extends LightningElement {
    pdIImageURL = IMAGES + '/SF-Certified_Platform-Developer-I.png';
    pAppBuilderImageURL = IMAGES + '/SF-Certified_Platform-App-Builder.png';
    adminImageURL = IMAGES + '/SF-Certified_Administrator.png';
}
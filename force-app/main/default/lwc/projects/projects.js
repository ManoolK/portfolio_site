import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/images';

export default class Projects extends LightningElement {
    siteLWCImageURL = IMAGES + '/lwr_site.png';
    comingSoonURL = IMAGES + '/coming_soon.png';
}
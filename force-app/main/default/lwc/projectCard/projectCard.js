import { LightningElement, api } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/images';

export default class ProjectCard extends LightningElement {
    siteLWCImageURL = IMAGES + '/lwr_site.png';
    @api altText;
    comingSoonURL = IMAGES + '/coming_soon.png';
}
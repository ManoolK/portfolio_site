import { LightningElement, api } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/images';

export default class ProjectCard extends LightningElement {
    @api cardtitle;
    @api carddescription;
    @api imgfromstaticres;
    @api alttext;
    @api imgname;
    @api applybrand1color;

    get imgLink() {
        if (this.imgfromstaticres) {
            return IMAGES + '/' + this.imgname;
        }
        return '';
    }

    get cardClass() {
        let cardclassmain = 'project project--brand';
        if (this.applybrand1color) {
            return cardclassmain + '-1';
        }
        return cardclassmain;
    }

    get linkClass() {
        let linkClassMain = 'project-title border-bottom-line--brand';
        if (this.applybrand1color) {
            return linkClassMain + '-1';
        }
        return linkClassMain;
    }

    get h3Class() {
        let h3classmain = 'heading-tertiary';
        if (this.applybrand1color) {
            return h3classmain + ' border-bottom-line--brand-1';
        }
        return h3classmain + ' brand-1';
    }

    get pClass() {
        let pclassmain = 'project-descr';
        if (this.applybrand1color) {
            return pclassmain + ' project-descr--brand-1';
        }
        return pclassmain;
    }
}
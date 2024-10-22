import { LightningElement, api } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/images';

export default class Hero extends LightningElement {
    funImageURL = IMAGES + '/fun-lines.png';
    personImageURL = IMAGES + '/003.jpg';
    targetSection;
    @api title;
    @api titleSecond;
    @api funText;
    @api smallText;
    @api showButton1;
    @api button1text;
    @api showButton2;
    @api button2text;
    @api componentName;

    handleButton2Click(event) {
        event.preventDefault();
        const targetId = event.target.dataset.targetId;
        const scrollToEvent = new CustomEvent('scrolltoevent', {
            detail: targetId,
            bubbles: true
        });
        this.dispatchEvent(scrollToEvent);
    }
}
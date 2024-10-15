import { LightningElement, api } from 'lwc';
import sendMessage from '@salesforce/apex/CallToActionController.sendMessage';

export default class CallToAction extends LightningElement {
    @api buttonLabel;
    fullname;
    email;
    company;
    message;

    renderedCallback() {
        this.fullname = this.template.querySelector('.full-name');
    }

    handleSubmit(event) {
        event.preventDefault();
        const fullNameValue = this.fullname.value;
        console.log(fullNameValue);

        sendMessage({
            fullName: fullNameValue,
            company: 'com',
            email: 'test@gmail.com',
            message: 'test message'
        });
    }
}
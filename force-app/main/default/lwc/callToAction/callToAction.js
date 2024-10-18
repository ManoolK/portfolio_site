import { LightningElement, api, wire } from 'lwc';
import getOrgId from '@salesforce/apex/CallToActionController.getOrgId';

export default class CallToAction extends LightningElement {
    @api buttonLabel;
    @api smallText;
    @api redirectTo;
    organizationId;
    actionURL;
    error;
    connectedCallbackUrl;
    
    @wire(getOrgId)
    wiredOrgId({ error, data }) {
        if (data) {
            this.organizationId = data;
            this.actionURL = 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=${data}';
            this.error = undefined;
        } else if (error) {
            this.organizationId = undefined;
            this.actionURL = undefined;
            this.error = error;
        }
    }

    connectedCallback() {
        this.connectedCallbackUrl = window.location.href + this.redirectTo;
    }
}
import { LightningElement } from 'lwc';

/**
 * @slot header This is the header slot
 * @slot footer This is the footer slot
 * @slot default This is the default slot
 */
export default class CustomThemeLayout extends LightningElement {

    constructor() {
        super();
        this.template.addEventListener('scrolltoevent', this.handleScrollToEvent);
    }

    handleScrollToEvent = (event) => {
        if (event) {
            const componentName = event.detail;
            const targetSection = this.template.querySelector(`c-${componentName}`);
            targetSection.scrollIntoView();
        }
    }
}
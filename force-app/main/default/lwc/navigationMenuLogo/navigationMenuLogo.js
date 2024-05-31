import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import OXANA_LOGO from '@salesforce/resourceUrl/oxanalogo';
import OXANA_MOBILE_LOGO from '@salesforce/resourceUrl/oxanaHamburgerMenuLogo';

export default class NavigationMenuLogo extends NavigationMixin(LightningElement) {
    @api formfactor;
    _oxanaLogo;

    @api
    set logo(value) {
        this.oxanaLogo = value;
    }

    get logo() {
        if (this.formfactor === 'hamburger') {
            return OXANA_MOBILE_LOGO;
        }
        return OXANA_LOGO;
    }

    handleClick(evt) {
        // use the NavigationMixin from lightning/navigation to perform the navigation.
        // prevent default anchor link since lightning navigation will be handling the click
        evt.stopPropagation();
        evt.preventDefault();
        // Navigate to the home page
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Home'
            }
        });
    }
}
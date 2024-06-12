import { LightningElement, api, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getNavigationMenuItems from '@salesforce/apex/NavigationMenuItemsController.getNavigationMenuItems';
import isGuestUser from '@salesforce/user/isGuest';

export default class Footer extends NavigationMixin(LightningElement) {
    @api menuName;
    error;
    isLoaded = false;
    // The menu items when fetched by the NavigationItemsController
    menuItems = [];
    publishedState;

    @wire(getNavigationMenuItems, {
        menuName: '$menuName',
        publishedState: '$publishedState'
    })
    wiredMenuItems({ error, data }) {
        if (data && !this.isLoaded) {
            this.menuItems = data.map((item, index) => {
                return {
                    target: item.Target,
                    id: index,
                    label: item.Label,
                    defaultListViewId: item.DefaultListViewId,
                    type: item.Type,
                    accessRestriction: item.AccessRestriction,
                    windowName: item.target
                };
            })
            .filter((item) => {
                // Only show "Public" items if guest user
                return (
                    item.accessRestriction === 'None' ||
                    (item.accessRestriction === 'LoginRequired' && !isGuestUser)
                );
            });
            this.error = undefined;
            this.isLoaded = true;
        } else if (error) {
            this.error = error;
            this.menuItems = [];
            this.isLoaded = true;
            console.error(`Navigation menu error: ${JSON.stringify(this.error)}`);
        }
    }
}
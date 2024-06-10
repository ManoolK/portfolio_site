/**
 * A controller for fetching NavigationMenuItems.
 */
global with sharing class NavigationMenuItemsController {
    public NavigationMenuItemsController() {}

    @AuraEnabled(cacheable=true)
    public static List<NavigationMenuItem> getNavigationMenuItems(String menuName, String publishedState) {
        if (String.isEmpty(menuName)) {
            return new List<NavigationMenuItem>();
        }

        String networkId = Network.getNetworkId();

        // find the link set belonging to the navigation menuName and active networkId
        List<NavigationLinkSet> linkSets = [
            SELECT Id
            FROM NavigationLinkSet
            WHERE DeveloperName = :menuName AND NetworkId = :networkId
        ];

        Id linkSetId = linkSets.get(0).Id;

        // collect all the menu items belonging to the link set
        // published state is either Draft or Live
        return [
            SELECT
                Label,
                Target,
                Type,
                DefaultListViewId,
                AccessRestriction,
                ParentId,
                Position,
                Status,
                TargetPrefs
            FROM NavigationMenuItem
            WHERE NavigationLinkSetId = :linkSetId AND Status = :publishedState //0LmDn000000gJRmKAM
            ORDER BY Position
        ];
    }
}
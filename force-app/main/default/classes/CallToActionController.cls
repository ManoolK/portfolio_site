public with sharing class CallToActionController {
    
    @AuraEnabled
    public static void sendMessage(String fullName, String email, String company, String message) {
        try {
            Lead lead = new Lead();
            lead.LastName = fullName;
            lead.Company = company;
            lead.Email = email;
            lead.Description = message;

            insert lead;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
import Ember from 'ember';

export default Ember.Controller.extend({
   
columns: [
  {
    "propertyName": "anchorprogramId",
    "title": "Anchor Program Id"
  },
  {
    "propertyName": "customername",
    "title": "Customer Name"
  },
  {
    "propertyName": "vendorname",
    "title": "Vendor Name"
  },
   {
    "propertyName": "stage",
    "title": "Stage"
  },
   {
    "propertyName": "pendingpayments",
    "title": "Pending Payments"
  },
  {
    "propertyName": "receivedpayments",
    "title": "Received Payments"
  },
  {
    "propertyName": "status",
    "title": "Status"
  },
  
],
});
import Ember from 'ember';

export default Ember.Controller.extend({
   
columns: [
  {
    "propertyName": "vendorname",
    "title": "Vendor Name"
  },
  {
    "propertyName": "Stage",
    "title": "stage"
  },
  {
    "propertyName": "pendingpayments",
    "title": "Pending payments"
  },
  {
    "propertyName": "receivedpayments",
    "title": "Received payments"
  },
  {
    "propertyName": "Status",
    "title": "status"
  },
  
],
});
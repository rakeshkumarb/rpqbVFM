import Ember from 'ember';

export default Ember.Route.extend({
     model(){
       
      
       var  data = [{"anchorprogramId":"AM1234567","customername":"Bajaj Electricals Limited","vendorname":"MULTI LIGHTING","stage":"","pendingpayments":"","receivedpayments":"","status":"1"},
       {"anchorprogramId":"PG5741946","customername":"Bajaj Electricals Limited","vendorname":"MULTI LIGHTING","stage":"","pendingpayments":"","receivedpayments":"","status":"2"},
       {"anchorprogramId":"PG4633479","customername":"Bajaj Electricals Limited","vendorname":"MULTI LIGHTING","stage":"","pendingpayments":"","receivedpayments":"","status":"2"}
       ];



        return data;
    }

});

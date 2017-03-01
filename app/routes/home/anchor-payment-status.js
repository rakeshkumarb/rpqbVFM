import Ember from 'ember';

export default Ember.Route.extend({
    model(){
       
      
       var  data = [{"vendorname":"MULTI LIGHTING","Stage":"","pendingpayments":"",receivedpayments:"","Status":"1"},
       {"vendorname":"MULTI LIGHTING","Stage":"","pendingpayments":"",receivedpayments:"","Status":"2"},
       {"vendorname":"MULTI LIGHTING","Stage":"","pendingpayments":"",receivedpayments:"","Status":"2"}
       ];



        return data;
    }
});

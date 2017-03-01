import Ember from 'ember';

export default Ember.Route.extend({

    model(){
       
      
       var  data = [{"anchorprogramId":"AM1234567","anchorname":"Bajaj Electricals Limited","vendorname":"MULTI LIGHTING"},
       {"anchorprogramId":"PG5741946","anchorname":"Bajaj Electricals Limited","vendorname":"MULTI LIGHTING"},
       {"anchorprogramId":"PG4633479","anchorname":"Bajaj Electricals Limited","vendorname":"MULTI LIGHTING"}
       ];



        return data;
    }

    
});
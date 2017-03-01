import Ember from 'ember';

export default Ember.Route.extend({
    	model(){
       
      
       var  data = [{"anchorprogramId":"PG4633479","anchorname":"Bajaj Electricals Limited","poId":"2547182412"},
       {"anchorprogramId":"PG5741946","anchorname":"Bajaj Electricals Limited","poId":""},
       {"anchorprogramId":"PG4633479","anchorname":"Bajaj Electricals Limited","poId":"2547182412"}
       ];



        return data;
    }

});
import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
        swapanchor: function() {
            console.log("swap");
            var anchor = this.get('anchor');

            if (anchor === undefined || anchor === false) {
                console.log("true block");
                anchor = true;
            } else {
                anchor = false;
            }

            this.set('anchor', anchor);
        },

       logout:function(){
           //console.log("reached")
            this.transitionToRoute('login');
       }

        
        
    }
    
   
});
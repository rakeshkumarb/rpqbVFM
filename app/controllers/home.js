import Ember from 'ember';

export default Ember.Controller.extend({
isActive:"active",
    actions: {
//
  //      gotolivestats: function(){
    
    //        this.transitionToRoute('livestats');
      //  },

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

        logout: function() {
            //console.log("reached")
            this.transitionToRoute('login');
        },

        swapregulator: function() {
            console.log("swap");
            var regulator = this.get('regulator');

            if (regulator === undefined || regulator === false) {
                console.log("true block");
                regulator = true;
            } else {
                regulator = false;
            }

            this.set('regulator', regulator);


        },

        toggleclass: function(){
            var isActive = this.get('isActive');
            if(isActive === null || isActive===undefined){
                    this.set('isActive',"active")
            }
            else{
                this.set('isActive',null)
            }
            

        },


        swapvendor: function() {
            console.log("swap");
            var vendor = this.get('vendor');

            if (vendor === undefined || vendor === false) {
                console.log("true block");
                vendor = true;
            } else {
                vendor = false;
            }

            this.set('vendor', vendor);
        },
        swappayment: function() {
            console.log("swap");
            var payment = this.get('payment');

            if (payment === undefined || payment === false) {
                console.log("true block");
                payment = true;
            } else {
                payment = false;
            }

            this.set('payment', payment);
        },
        swapsettlement: function() {
            console.log("swap");
            var settlement = this.get('settlement');

            if (settlement === undefined || settlement === false) {
                console.log("true block");
                settlement = true;
            } else {
                settlement = false;
            }

            this.set('settlement', settlement);
        }
        }
});
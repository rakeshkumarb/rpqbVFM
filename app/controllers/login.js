import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

        home: function() {
            this.transitionToRoute('home');
        }
    }

});
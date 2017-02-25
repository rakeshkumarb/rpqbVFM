import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');

  this.route('home',function(){
      this.route('anchor-registration');
      this.route('anchor-sign-purchase-order');
  });

  

});

export default Router;

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');

  this.route('home',function(){
      //rakesh - anchor
      this.route('anchor-registration');
      this.route('anchor-sign-purchase-order');
      this.route('anchor-invoice-acceptance');
      this.route('anchor-pending-payment');
      this.route('anchor-payment-status');
      
      //shraddha vendor
      this.route('vendor-registration');
      this.route('vendor-sign-invoice');
      this.route('vendor-payment-status');

       //shraddha Payment
      this.route('payment-initation');

      //sweta-regulator
      this.route('livestats');
      this.route('anchoragreement');
      this.route('vendoragreement');
      this.route('anchorprograminit');
      this.route('anchorprogrampending');
      this.route('anchororderclosed');
      this.route('settlement');

  });



  this.route('Sweta-Shar');
});

export default Router;

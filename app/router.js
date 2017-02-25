import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
<<<<<<< HEAD
  this.route('home');
=======
  this.route('anchor-registration');
>>>>>>> a5b82b2678a21a5ddb1643c6a73b904b066202a5
});

export default Router;

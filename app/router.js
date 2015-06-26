import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('current', { path: '/'});
  this.route('hourly');
  this.route('weekly');
});

export default Router;

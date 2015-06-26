import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['hourly-weather-container'],
  upcomingForecasts: function() {
    return this.get('model.data').slice(0, 12);
  }.property('model.data')
});

import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['hourly-weather-container'],
  isShowing: false,
  upcomingForecasts: function() {
    return this.get('model.data').slice(0, 12);
  }.property('model.data')
});

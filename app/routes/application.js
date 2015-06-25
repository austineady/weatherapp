import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // return Ember.RSVP.hash({
    //   items: Ember.$.ajax("https://api.forecast.io/forecast/249830a432373c0331ab2cf8b33a624e/34.8520289,-82.3996694", {dataType: 'jsonp'}),
    //   location: new Ember.RSVP.Promise(function(resolve, reject) {
    //     navigator.geolocation.getCurrentPosition(resolve, reject);
    //   })
    // });
  }
});

//navigator.geolocation.getCurrentPosition(function(position) {
//console.log(position);
//})

/*

var promise = new Promise(function(resolve, reject) {
navigator.geolocation.getCurrentPosition(resolve, reject);
})

promise.then(console.log.bind(console))

*/

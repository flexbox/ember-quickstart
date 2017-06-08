import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Dennis Ritchie', 'Linus Torvalds', 'Ken Thompson', 'Tim Berners-Lee'];
  }
});

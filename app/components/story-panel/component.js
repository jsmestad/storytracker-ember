import Ember from 'ember';

export default Ember.Component.extend({
  // classNameBindings: ['is-visible'],
  // classNames: ['is-visible'],
  // isEnabled: false,
  actions: {
    close: function() {
      var promise = new Promise(function(resolve,reject) {

        this.$('.cd-panel').removeClass('is-visible');

        setTimeout(function() {
          resolve(true);
        }, 600);
      }.bind(this));
      promise.then(function() {
        return this.sendAction('close');
      }.bind(this));
    }
  },
  becomeVisible: function() {
    setTimeout(function() {
      this.$('.cd-panel').addClass('is-visible');
    }.bind(this), 100);
  }.on('didInsertElement')
});

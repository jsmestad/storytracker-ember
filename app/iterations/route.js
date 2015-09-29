import Ember from 'ember';

export default Ember.Route.extend({
  displayStory: false,
  model: function(params) {
    return this.store.query('iteration', params);
  },
  actions: {
    openStoryPanel: function(story) {
      return this.render('story-panel', {
        outlet: 'story-panel',
        into: 'application',
        model: story,
        controller: 'application'
      });
    },
    closeStoryPanel: function() {
      return this.disconnectOutlet({
        outlet: 'story-panel',
        parentView: 'application'
      });
    }
  }
});

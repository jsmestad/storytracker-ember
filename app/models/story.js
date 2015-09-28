import DS from 'ember-data';

export default DS.Model.extend({
  iteration: DS.belongsTo('iteration'),

  name: DS.attr('string'),
  description: DS.attr('string'),
  story_type: DS.attr('string'),
  state: DS.attr('string')
});

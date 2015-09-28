import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr('number'),
  stories: DS.hasMany('story', {async: true})
  // team_strength: DS.attr('number'),
  // start: DS.attr('date'),
  // finish: DS.attr('date')
});

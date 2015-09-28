import Ember from 'ember';

let Helper = Ember.Object.extend({
  serialize(obj_or_ary) {
    let _serialize = function(object){
      let attributes = Ember.copy(object, true);
      delete attributes.id;
      delete attributes.type;
      console.log(attributes);
      return {
        id: object.id,
        type: object.type,
        attributes: attributes
      };
    };
    if ($.isArray(obj_or_ary)) {
      return { data: obj_or_ary.map(_serialize) };
    } else {
      return { data: _serialize(obj_or_ary) };
    }
  },
  deserialize(serialized){
    let data = serialized.data;
    let compact = function(obj){
      let o = Ember.copy(obj, true);
      let attributes = o.attributes;
      delete o.attributes;
      return $.extend(o, attributes);
    };
    if ($.isArray(data)) {
      return data.map(compact);
    } else {
      return compact(data);
    }
  }
});

export default Helper.create();

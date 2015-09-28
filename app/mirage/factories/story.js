import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  type: 'stories',
  name: faker.lorem.sentence,
  description: faker.lorem.paragraph,
  story_type: 'feature'
});

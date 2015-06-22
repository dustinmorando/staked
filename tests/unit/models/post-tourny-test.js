import { moduleForModel, test } from 'ember-qunit';

moduleForModel('post-tourny', 'Unit | Model | post tourny', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

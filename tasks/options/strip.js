module.exports = {
  production : {
    src : 'dist/ember-model.prod.js',
    dest : 'dist/ember-model.prod.js',
    options : {
      nodes : ['Ember.assert']
    }
  }
};

var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'hash'
});

Router.map(function() {
  this.route('custom-header');
  this.route('sub-header');
  this.route('tab-bar');
  this.route('standard-bars');
  this.route('modal');
});

export default Router;

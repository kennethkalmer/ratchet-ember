export default Ember.View.extend({
  tagName: 'header',
  classNames: ['bar', 'bar-nav'],

  // didInsertElement: function() {
  //   var bar = this.get('controller.titleBar');
  //
  //   if (bar) {
  //     this.pushObject( bar.view );
  //   } else {
  //     this.pushObject( this.get('default') );
  //   }
  // },
  //
  // default: function() {
  //   return Ember.View.create({ template: Ember.Handlebars.compile("<h1 class=\"title\">Ratchet &#x2661; Ember</h1>") });
  // }.property()
});

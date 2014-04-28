export default Ember.Component.extend({
  classNames: ['scroll-wrapper'],
  template: Ember.Handlebars.compile('<div class="scroller">{{yield}}</div>'),

  attributeBindings: ['snapIgnore:data-snap-ignore'],
  snapIgnore: true,

  scrollBars: true,
  fadeScrollBars: true,
  shrinkScrollbars: 'clip',

  didInsertElement: function() {
    var scroller = new IScroll( this.get('element'), {
        scrollbars: this.get('scrollBars'),
        fadeScrollBars: this.get('fadeScrollBars'),
        shrinkScrollbars: this.get('shrinkScrollbars')
      }
    );
    this.set('scroller', scroller);
  }
});

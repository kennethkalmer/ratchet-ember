export default Ember.ContainerView.extend({
  classNames: ['content', 'snap-content'],
  classNameBindings: ['hasBar', 'hasHeaderSecondary', 'hasFooter', 'hasFooterSecondary'],

  childViewInserted: function() {
    var _this = this;
    Ember.run.scheduleOnce('afterRender', function() {
      _this.checkBars();
    });
  }.observes("childViews.@each.didInsertElement"),

  hasBar: function() {
    var bars = this.get('_bars');
    if (bars)
      return bars.is('header.bar-nav') || bars.is('.bar-standard');
  }.property('_bars'),

  hasHeaderSecondary: function() {
    var bars = this.get('_bars');
    if (bars)
      return bars.is('.bar-header-secondary');
  }.property('_bars'),

  hasFooter: function() {
    var bars = this.get('_bars');
    if (bars)
      return bars.is('.bar-tab');
  }.property('_bars'),

  hasSecondaryFooter: function() {
    var bars = this.get('_bars');
    if (bars)
      return bars.is('.bar-footer-secondary');
  }.property('_bars'),

  checkBars: function() {
    this.set('_bars', this.$('.bar'));
  }
});

export default Ember.View.extend({
  snapper: Ember.computed.alias('controller.controllers.drawers.snapper'),

  didInsertElement: function() {
    var snapper = new Snap({
      element: this.$('.content').get(0)
    });

    snapper.on('drag', this.updateDrawers.bind(this));
    snapper.on('animating', this.updateDrawers.bind(this));
    snapper.on('animated', this.updateDrawers.bind(this));

    this.set('snapper', snapper);
  },

  updateDrawers: function() {
    var snapper = this.get('snapper'),
        state = snapper.state(),
        towards = state.info.towards,
        opening = state.info.opening;

    if (opening == 'right' && towards == 'left') {
        this.$('#right-drawer').addClass('active-drawer');
        this.$('#left-drawer').removeClass('active-drawer');

    } else if (opening == 'left' && towards == 'right') {
        this.$('#right-drawer').removeClass('active-drawer');
        this.$('#left-drawer').addClass('active-drawer');
    }
  }
});

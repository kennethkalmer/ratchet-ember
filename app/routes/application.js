export default Ember.Route.extend({
  actions: {
    toggleDrawer: function(side) {
      this.controllerFor('drawers').send( 'toggleDrawer', side );
    }
  }
})

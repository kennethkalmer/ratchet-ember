export default Ember.Controller.extend({
  actions: {
    toggleDrawer: function(side) {
      var snapper = this.get('snapper'),
          state = snapper.state();

      if ( state.state == "closed" ) {
        snapper.open(side);
      } else {
        snapper.close(side);
      }

    }
  }
});

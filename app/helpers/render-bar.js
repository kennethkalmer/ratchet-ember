export default function(attr) {
  var _this = this, bar = this.get(attr);

  Ember.run.scheduleOnce("render", function () {
    return Ember.Handlebars.helpers.view.call(_this, bar.view, bar.options);
  });
}

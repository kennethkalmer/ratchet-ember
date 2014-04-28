export default function(options) {
  var data = options.data,
      context = (options.contexts && options.contexts[0]) || this,
      template = options.fn,
      currentView = data.view;

  var headerController = this.container.lookup("controller:header");

  // View holding template and context states.
  var view = Ember.View.create({
    template: template,
    context: context
  });

  // When the parent view is destroyed, remove it's block references from the stack.
  currentView.on("willDestroyElement", function() {
    // Remove the view
    headerController.set('titleBar', null);
  });

  // Add the view to our header controller
  headerController.set('titleBar', { view: view, options: options });
}

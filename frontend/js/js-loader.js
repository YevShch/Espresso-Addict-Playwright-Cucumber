// Load all JavaScripts
// (They load in order, but the only thing that matters here is that start is loaded last)
jsLoader(
  [
    "add-choices-to-locations.js",
    "add-directions.js",
    "build-menu.js",
    "do-on-menu-choice.js",
    'dom-grabber.js',
    "global-variables.js",
    "goFullScreen.js",
    "json-loader.js",
    "show-bag.js",
    "show-location.js",
    "update-bag.js",
    "update-player-location.js",
    "update-player-status.js",
    "update-progress-bars.js",
    "wait-around.js",
    "start.js"
  ]
);
// Helper function for loading JavaScript files
function jsLoader(jsFiles) {
  for (let file of jsFiles) {
    let script = document.createElement('script');
    script.src = 'js/' + file;
    document.body.append(script);
  }
}
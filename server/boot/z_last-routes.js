/**
 * Created by enco on 23.12.15..
 */
var path = require('path');

module.exports = function mountRestApi(server) {
  // https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#how-to-configure-your-server-to-work-with-html5mode
  server.all('/*', function(req, res) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: path.resolve(__dirname, '..', '..', 'client') });
  });
};

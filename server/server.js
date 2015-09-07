var loopback = require('loopback');
var boot = require('loopback-boot');
var path = require('path');
var favicon = require('serve-favicon');

var app = module.exports = loopback();

app.use(loopback.static(path.resolve(__dirname , '../client')));
app.use(favicon(path.resolve(__dirname , '../client/favicon.ico')));

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});

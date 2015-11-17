/**
 * Created by enco on 6.10.15..
 */

module.exports = function(server) {

//show password reset form
  server.get('/reset-password', function (req, res, next) {
    if (!req.accessToken) return res.sendStatus(401);
    res.render('password-reset', {
      accessToken: req.accessToken.id
    });
  });

//reset the user's pasword
  server.post('/reset-password', function (req, res, next) {
    if (!req.accessToken) return res.sendStatus(401, new Error('Your access token is not valid'));

    //verify passwords match
    if (!req.body.password || !req.body.confirmation ||
      req.body.password !== req.body.confirmation) {
      return res.sendStatus(400, new Error('Passwords do not match'));
    }

    server.models.Account.findById(req.accessToken.userId, function (err, user) {
      if (err) return res.sendStatus(404);
      user.updateAttribute('password', req.body.password, function (err, user) {
        if (err) return res.sendStatus(404);
        console.log('> password reset processed successfully');
        res.send({
          title: 'Password reset success',
          content: 'Your password has been reset successfully',
          redirectTo: '/',
          email: user.email
        });
      });
    });
  });

  //change the user's pasword
  server.post('/change-password', function (req, res, next) {
    if (!req.accessToken) return res.sendStatus(401, new Error('Your access token is not valid, try to login again.'));

    //verify passwords match
    if (!req.body.password || !req.body.confirmation ||
      req.body.password !== req.body.confirmation) {
      return res.sendStatus(400, new Error('Passwords do not match'));
    }



    server.models.Account.findById(req.accessToken.userId, function (err, user) {
      if (err) return res.sendStatus(404);

      user.hasPassword(req.body.current, function(err, isMatch) {
        if (err) {
          return res.sendStatus(404);
        } else if (isMatch) {
          user.updateAttribute('password', req.body.password, function (err, user) {
            if (err) return res.sendStatus(404);
            console.log('> password change processed successfully');
            res.send({
              title: 'Password change success',
              content: 'Your password has been changed successfully',
              redirectTo: '/',
              email: user.email
            });
          });
        } else {
          return res.sendStatus(400, new Error('Not your password'));
        }
      });
    });
  });

  server.get('/verified', function(req, res){
    res.render('verified',{});
  });
}
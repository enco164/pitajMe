var path = require('path');
var config = require('../../server/config.json');

module.exports = function(Account) {
  //send verification email after registration
  Account.afterRemote('create', function(context, user, next) {
    console.log('> user.afterRemote.create triggered');

    var email_body = '';

    var options = {
      type: 'email',
      to: user.email,
      from: 'nepavent@gmail.com',
      subject: 'Thanks for registering.',
      text: 'Please verify your email by opening this link in a Web browser:\n\t{href}',
      template: path.resolve(__dirname, '../../server/views/verify.ejs'),
      redirect: '/verified',
      user: user
    };

    user.verify(options, function(err, response, next) {
      if (err) {
        console.log(err);
        return next(err);
      }

      console.log('> verification email sent:', response);

      context.res.render('response', {
        title: 'Signed up successfully',
        content: 'Please check your email and click on the verification link ' +
        'before logging in.',
        redirectTo: '/#/login',
        redirectToLinkText: 'Log in'
      });
    });
  });

  //send password reset link when requested
  Account.on('resetPasswordRequest', function(info) {
    var url = 'http://' + config.host + ':' + config.port + '/#/reset-password';
    var html = 'Click <a href="' + url + '/' +
      info.accessToken.id + '">here</a> to reset your password';

    Account.app.models.Email.send({
      to: info.email,
      from: 'nepavent@gmail.com',
      subject: 'Password reset',
      html: html
    }, function(err) {
      if (err) return console.log('> error sending password reset email');
      console.log('> sending password reset email to:', info.email);
    });
  });
};


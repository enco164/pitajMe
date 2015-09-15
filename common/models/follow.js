module.exports = function(Follow) {

  Follow.validate('followerId', customValidator, {message: 'User cannot follow himself'});

  function customValidator(err) {
    var self = this;
    console.log('provera' + JSON.stringify(self));
    var followerId = String( self.followerId );
    var followeeId = String( self.followeeId );
    if (followerId == followeeId) {
      err();
    }
  }
};

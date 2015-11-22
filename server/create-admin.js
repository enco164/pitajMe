/**
 * Created by enco on 22.11.15..
 */
var server = require('./server');
var Account = server.models.Account;
var Role = server.models.Role;
var RoleMapping = server.models.RoleMapping;

Account.create([
    {username: 'admin', email: 'admin@pitajme.com', password: 'adminpassword', emailVerified: 1, sex:'Male'}
  ], function(err, users){
  if(err) throw err;
  console.log('Created users: ' + users);

  Role.create({name: 'admin'}, function(err, role){
    if(err) throw err;
    role.principals.create({
      principalType: RoleMapping.USER,
      principalId: users[0].id
    }, function(err, principal){
      if(err) throw err;

      console.log('Created principal: '+ principal);
    });
  });
});

var request = require('superagent');

var signUpAdminUser = function(req, res){
	//sign up a new admin user 
	request
		.post('https://api.parse.com/1/users')
		.set('X-Parse-Application-Id', 'TBjbJSM1UCk7mlG7Jh0TpBAIIbyylwEgnkfg9GoK')
		.set('X-Parse-REST-API-Key', '6LXEZG7dfAsbGGGg1E6OL08NFSclMvVMfooGRD4Z')
		.send({
			username: req.swagger.params.username.value,
			password: req.swagger.params.password.value
		})
		.end(function(err, result){
			console.log(result)
			res.send(result.body);
		});
}

module.exports = {signUpAdminUser: signUpAdminUser};
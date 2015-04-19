var request = require('superagent')


var loginFunc = function(req, res) {
	// var sessionToken = req.query.sessionToken;

	// if(!sessionToken) return res.sendStatus(config.codes.error.missingUrlParameters)
	

	// login admin user
	request
		.get('https://api.parse.com/1/login')
		.set('X-Parse-Application-Id', 'TBjbJSM1UCk7mlG7Jh0TpBAIIbyylwEgnkfg9GoK')
		.set('X-Parse-REST-API-Key', '6LXEZG7dfAsbGGGg1E6OL08NFSclMvVMfooGRD4Z')
		.query('username=' + req.swagger.params.username.value)
		.query('password=' + req.swagger.params.password.value)		
		.end(function(err, result){
			console.log(req.swagger.params.username)
			res.send(result.body);
		});
		
};

module.exports = { login: loginFunc};

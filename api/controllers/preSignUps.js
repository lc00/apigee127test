var request = require('superagent');

var preSignUps = function(req, res){
	// sign up new user under preSignUps class in the app
	request
		.post('https://api.parse.com/1/classes/preSignUps')
		.set('X-Parse-Application-Id', 'TBjbJSM1UCk7mlG7Jh0TpBAIIbyylwEgnkfg9GoK')
		.set('X-Parse-REST-API-Key', '6LXEZG7dfAsbGGGg1E6OL08NFSclMvVMfooGRD4Z')
		.set('Content-Type', 'application/json')
		.send({
			name: req.swagger.params.name.value,
			email: req.swagger.params.email.value
		})
		.end(function(err, result){
			res.send(result.body);
		})
}

module.exports={signUp: preSignUps};
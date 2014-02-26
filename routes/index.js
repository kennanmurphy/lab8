var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  	projects.gridBoolean = false;
  	res.render('index', projects);
};

exports.viewGrid = function(req, res) {
	projects.gridBoolean = true;
	res.render('index', projects);
};
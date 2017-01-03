'use strict';

var router = require('express').Router();

var HttpError = require('../utils/HttpError');
var User = require('./users/user.model');
var Story = require('./stories/story.model');

router.post('/', (req, res, next) => {
	User.findOne({
		where : req.body
	})
	.then(user => {
		if (!user) {
			res.sendStatus(401)
		}
		else {
			req.session.userId = user.id
			res.sendStatus(204)
		}
	})
	.catch(next)
})

module.exports = router;
'use strict';

var router = require('express').Router();

router.use('/users', require('./users/user.router'));

router.use('/stories', require('./stories/story.router'));

router.post('/login', (req, res, next) => {
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

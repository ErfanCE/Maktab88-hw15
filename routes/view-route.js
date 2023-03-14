const router = require('express').Router();
const {
	renderLogin,
	renderSignup,
	renderUserProfile
} = require('../controllers/view-controller');

router.get('/signup', renderSignup);

router.get('/login', renderLogin);

router.get('/profile', renderUserProfile);

module.exports = router;

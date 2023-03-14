const router = require('express').Router();
const { signup, login, logout } = require('../controllers/auth-controller');
// router.get('/', (req, res) => res.send('auth root is ok'));

router.post('/signup', signup);

router.post('/login', login);

router.get('/logout/:username', logout);

module.exports = router;

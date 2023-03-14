const { join } = require('node:path');
const { readFile } = require('node:fs/promises');
const { AppError } = require('../utils/app-error');

const renderSignup = (req, res, next) => {
	res.render(join(__dirname, '../views/signup-page.ejs'));
};

const renderLogin = (req, res, next) => {
	res.render(join(__dirname, '../views/login-page.ejs'));
};

const renderUserProfile = async (req, res, next) => {
	try {
		const usersData = await readFile(
			join(__dirname, '../dbs/users-data.json'),
			'utf-8'
		);
		const users = JSON.parse(usersData);

		const user = users.find(user => user.isLoggedIn);

		if (!user) return res.redirect('http://localhost:8000/login');

		res.render(join(__dirname, '../views/user-profile-page.ejs'), { user });
	} catch (error) {
		next(new AppError(500, '[-]: view controller > render user profile'));
	}
};

module.exports = { renderLogin, renderSignup, renderUserProfile };

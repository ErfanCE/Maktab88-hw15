const logout = async () => {
	try {
		// reset status-logger
		document.getElementById('status-logger').textContent = `DEFAULT-TEXT`;
		document.getElementById('status-logger').style.visibility = 'hidden';

		const username = document.getElementById('logout').dataset.username;

		const responseObject = await fetch(
			`http://localhost:8000/api/auth/logout/${username}`
		);

		const response = await responseObject.json();

		if (!responseObject.ok) {
			throw new Error('fetch-get-logout', {
				cause: response
			});
		}

		if (response.status === 'success') {
			document.getElementById(
				'status-logger'
			).textContent = `username: ${username} logged out successfully `;

			document.getElementById('status-logger').style.visibility = 'visible';

			setTimeout(() => {
				// redirect
				location.href = 'http://localhost:8000/login';
			}, 2000);
		}
	} catch (error) {
		console.log(error);
		console.log(error?.cause);

		document.getElementById('status-logger').textContent = error.cause.message;
		document.getElementById('status-logger').style.color = 'red';

		document.getElementById('status-logger').style.visibility = 'visible';

		setTimeout(() => {
			// redirect
			location.href = 'http://localhost:8000/login';
		}, 2000);
	}
};

document.getElementById('logout').addEventListener('click', logout);

import cityCubeDb from '#clients/tursoCityCubeClient.js'

const signUserUp = async (req, res, next) => {
	const email = req.body.email;
	const password = req.body.password;

	if (!email || !password) {
		res.status(400);
		return;
	}

	const signInRes = await cityCubeDb.userSignUp(email, password);

	res.status(signInRes.statusCode);

	if (signInRes.statusCode != 200) {
		res.message(signInRes.msg);
		return;
	}

	res.json(signInRes);
}

export { signUserUp };

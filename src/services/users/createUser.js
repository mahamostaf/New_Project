import Users from '../../helpers/db/users.db.js';
export function register(req, res) {
	const { name, email, phone } = req.body;
	if (Users.some((user) => user.email === email)) {
		return res.status(400).json({ message: 'Email already exists' });
	}
	const user = {
		id: Users.length + 1,
		name,
		email,
		phone
	};
	Users.push(user);
	return res.json({
		message: 'User registered succesfully',
		data: user,
	});
}

const User = require('../models/User');

exports.createUser = async (req, res) => {
  const username = req.body;
  const hasUser = await User.findOne({
    username: username,
  });

  if (hasUser) {
    return res.status(409).json({ message: 'User already exists.' });
  }

  const newUser = await User.create({
    username: username,
  });

  return res.status(201).json({ message: 'User created.' });
};

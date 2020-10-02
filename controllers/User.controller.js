const User = require('../models/User');
const Quiz = require('../models/Quiz')
exports.createUser = async (req, res) => {
  const { phoneNumber, username } = req.body;
  const hasUser = await User.findOne({
    phoneNumber: phoneNumber,
  });

  if (hasUser) {
    const userInfo = await Quiz.findOne({
      username: hasUser.username
    })
    return res.status(200).json({ data: userInfo });
  }
  try {
    console.log('PhoneNumber:' + phoneNumber)
    console.log('Username' + username)

    const newUser = await User.create({
      phoneNumber: phoneNumber,
      username: username,
    });
  } catch (error) {
    if (error) console.log(error)
    else console.log('Create user successfully')
  }


  return res.status(201).json({ message: 'User created.' });
};

exports.getUser = async (req, res) => {
  const phoneNumber = req.query.phoneNumber
  const hasUser = await User.findOne({ phoneNumber: phoneNumber })

  console.log(hasUser)
  if (hasUser) {
    const userInfo = await Quiz.findOne({ username: hasUser.username })
    console.log(userInfo)
    return res.status(200).json({ username : hasUser.username })
  }
  return res.status(404).json({ message: 'Please create username' })
}

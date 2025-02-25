const validateUserData = (req, res, next) => {
  const { aboutMe, address, birthdate, config } = req.body;

  // // Validate that "About Me" text is not too short
  // if (config.aboutMe === true && (!aboutMe || aboutMe.length < 10)) {
  //   return res.status(400).json({ message: 'About Me section must have at least 10 characters.' });
  // }

  // Validate Address has all fields
  if (config.address === true && (!address || !address.street || !address.city || !address.state || !address.zip)) {
    return res.status(400).json({ message: 'All address fields are required.' });
  }

  // Validate Birthdate
  if (config.birthdate === true && !birthdate) {
    return res.status(400).json({ message: 'Invalid birthdate format.' });
  }

  next();
};

module.exports = { validateUserData };

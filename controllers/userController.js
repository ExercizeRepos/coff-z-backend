const User = require('../models/User');

const createUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const newUser = new User({
            email,
            password,
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};

const getUser = async (req, res) => {
    console.log("req.query.params: ", req.query.email)
    console.log("req.query", req.query)
    try {
        const user = await User.findOne({ email: req.query.email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error: error.message });
    }
};

const updateUser = async (req, res) => {
    console.log(req.body)
    try {
        const user = await User.findOneAndUpdate(
            { email: req.body.email },
            req.body,
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error updating User.js', error: error.message });
    }
};

module.exports = { createUser, getUser, updateUser };

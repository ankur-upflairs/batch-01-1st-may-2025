const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword, role });
    res.status(201).json({ message: 'User registered successfully', user: { username: user.username, role: user.role } });
  } catch (err) {
    res.status(400).json({ error: 'User registration failed', details: err.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(401).json({ error: 'Invalid username credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid password credentials' });
    let token= jwt.sign({ id: user._id, role: user.role },process.env.JWT_SECRET,{expiresIn:'7d'})    

    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ error: 'Login error', details: err.message });
  }
};

exports.protectedRoute = (req, res) => {
  res.json({ message: 'You are authorized', user: req.user });
};

const express = require('express');
const { register, login, protectedRoute } = require('../controllers/authController');
const { verifyToken, requireRole } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/protected', verifyToken, protectedRoute);
router.get('/admin', verifyToken, requireRole('admin'), (req, res) => {
  res.json({ message: 'Hello Admin!' });
});

module.exports = router;

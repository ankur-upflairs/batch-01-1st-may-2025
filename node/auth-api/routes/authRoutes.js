const express = require('express');
const { register, login, protectedRoute } = require('../controllers/authController');
const { authenticate, requireRole } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/protected', authenticate, protectedRoute);
router.get('/admin', authenticate, requireRole('admin'), (req, res) => {
  res.json({ message: 'Hello Admin!' });
});

module.exports = router;

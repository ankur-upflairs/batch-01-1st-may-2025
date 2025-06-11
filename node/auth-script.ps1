# Define project structure
$projectName = "auth-api"
$folders = @(
    "$projectName/controllers",
    "$projectName/middlewares",
    "$projectName/models",
    "$projectName/routes"
)

# Create folders
foreach ($folder in $folders) {
    New-Item -Path $folder -ItemType Directory -Force | Out-Null
}

# Create package.json
Set-Content "$projectName\package.json" @"
{
  "name": "auth-api",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "nodemon server.js"
  },
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^7.3.4"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
"@

# Create .env
Set-Content "$projectName\.env" @"
PORT=5000
MONGO_URI=mongodb://localhost:27017/auth-db
JWT_SECRET=yourSecretKey
"@

# Create server.js
Set-Content "$projectName\server.js" @"
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
"@

# Create models/User.js
Set-Content "$projectName\models\User.js" @"
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

module.exports = mongoose.model('User', userSchema);
"@

# Create controllers/authController.js
Set-Content "$projectName\controllers\authController.js" @"
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
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ error: 'Login error', details: err.message });
  }
};

exports.protectedRoute = (req, res) => {
  res.json({ message: 'You are authorized', user: req.user });
};
"@

# Create middlewares/authMiddleware.js
Set-Content "$projectName\middlewares\authMiddleware.js" @"
const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(403).json({ error: 'No token provided' });

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

exports.requireRole = (role) => (req, res, next) => {
  if (req.user.role !== role) return res.status(403).json({ error: 'Access denied' });
  next();
};
"@

# Create routes/authRoutes.js
Set-Content "$projectName\routes\authRoutes.js" @"
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
"@

# Initialize npm and install dependencies
Set-Location $projectName
npm install
npm install --save-dev nodemon

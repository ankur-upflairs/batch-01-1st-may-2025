const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const {authenticate, authorize} = require('../middlewares/authMiddleware')
const {upload} = require('../middlewares/multerSetup')

// CRUD routes
router.post('/',upload.single('image'), courseController.createCourse);
router.get('/', authenticate,authorize('admin','user'), courseController.getAllCourses);
router.get('/:id',authenticate, courseController.getCourseById);
router.put('/:id',authenticate,authorize('admin'), courseController.updateCourse);
router.delete('/:id',authenticate,authorize('admin'), courseController.deleteCourse);

module.exports = router;

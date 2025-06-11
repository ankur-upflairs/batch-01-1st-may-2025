const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const {authenticate, authorize} = require('../middlewares/authMiddleware')

// CRUD routes
router.post('/',authenticate,authorize('admin'), courseController.createCourse);
router.get('/', authenticate,authorize('admin','user'), courseController.getAllCourses);
router.get('/:id',authenticate, courseController.getCourseById);
router.put('/:id',authenticate,authorize('admin'), courseController.updateCourse);
router.delete('/:id',authenticate,authorize('admin'), courseController.deleteCourse);

module.exports = router;

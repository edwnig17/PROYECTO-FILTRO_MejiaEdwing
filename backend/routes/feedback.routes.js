const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController.js');

router.post('/', feedbackController.createFeedback);
router.get('/', feedbackController.getFeedbacks);

module.exports = router;

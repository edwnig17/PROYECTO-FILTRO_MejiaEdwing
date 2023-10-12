const Feedback = require('../models/feedback.js');


exports.createFeedback = async (req, res) => {
    try {
      const { message } = req.body; 
  
      const newFeedback = new Feedback({ message });
        const savedFeedback = await newFeedback.save();
  
      res.json(savedFeedback);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el feedback' });
    }
  };
  

exports.getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ date: -1 });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los feedback' });
  }
};

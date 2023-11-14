const A= require('../middlewares/resolve_and_catch');
const FormTable = require('../models/googleForm');

const googleFormControllers = {
    submitForm: A(async (req, res) => {
        console.log(req,'req1234');
        const { name, email,education, skills,linkedn_profile,current_ctc,expected_ctc,references,resume,message } = req.body;
        try {
          const newBook = new FormTable({ name, email, education,skills,linkedn_profile,current_ctc,expected_ctc,references,resume,message });
          const savedBook = await newBook.save();
          res.status(201).json({ message: 'Book created successfully', book: savedBook });
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
    }),
}

module.exports = googleFormControllers; 
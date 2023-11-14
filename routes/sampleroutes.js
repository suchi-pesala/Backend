const createSample=require('../controllers/sample_controller').createSample;
const express=require('express');
const googleFormControllers=require('../controllers/googleFormControllers');

const router=express.Router();

router.post('/create',createSample);
router.post('/submitForm',googleFormControllers.submitForm);

module.exports=router;

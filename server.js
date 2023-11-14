const connectDB=require('./database');
const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser = require('body-parser');
const dotenv=require('dotenv');
connectDB();

const port=process.env.PORT || 5001;
app.use(bodyParser.json());
app.use(cors());
dotenv.config();
app.use(express.json({extended:false}));
app.use('/api/sample',require('./routes/sampleroutes'));


//app.use
app.listen(port,()=>console.log(`Server running on port ${port}`));


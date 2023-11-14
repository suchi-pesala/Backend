const mongoose=require('mongoose');
const mongo_url='mongodb+srv://suchi123:suchi18@devconnector.jkxmnin.mongodb.net/';


const connectDB=async()=>{
    mongoose.set('strictQuery', false);
    mongoose.connect(mongo_url, {useNewUrlParser: true,
         useUnifiedTopology:true,
        }).then((data)=>{
        console.log(`Database connected ${data.connection.host}`)
    })
    
}




module.exports=connectDB;
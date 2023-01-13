const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDb = (uri) =>{
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log('Connected to Database Successfully');
    }).catch((error)=>{
        console.log(error);
    })
}

module.exports = connectDb;
require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDb = require('./db/connect')
const routes = require('./routes/routes')
const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`sever is listening to ${PORT} port`);
})

// adding middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',routes)


const databaseConnection = async () =>{
    try {
        await connectDb(process.env.MONGO_URL);
        app.get("/",(req,res)=>{
            res.send("Hi Welcome YuvaCracy Backend")
        })

    } catch (error) {
        console.log(error);
    }
}
databaseConnection();
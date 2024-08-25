const mongoose = require('mongoose')

const db = async ()=>{
    try{
        mongoose.set('strictQuery', false)
        await mongoose.connect("mongodb+srv://rishimpatel21:QvYvopbdngenDqpI@cluster0.j6qof.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {useNewUrlParser: true, useUnifiedTopology: true})
        console.log("DB connected");
    } catch(error){
        console.log('DB connection error', error);
    }
}

module.exports = {db}
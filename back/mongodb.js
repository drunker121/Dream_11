const mongoose=require('mongoose')
const mongoURL = "mongodb+srv://nitish:nitish@cluster0.2zso0bd.mongodb.net/?retryWrites=true&w=majority"

const db=()=>{

    mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connected to db');
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports=db;
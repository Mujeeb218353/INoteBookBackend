const mongoose = require('mongoose');
const uri  = 'mongodb+srv://mujeeb218353:mdb@786786@inotebook.cakfrfe.mongodb.net/?retryWrites=true&w=majority';

const connectToMongo = () =>{
    mongoose.connect(uri).then(
        () => {
            console.log('Connected to MongoDB');
        }
    ).catch(err => console.log(err));
    const userSchema = new mongoose.Schema({
        name: String,
        email: String,
        password: String
    });
}
module.exports = connectToMongo;

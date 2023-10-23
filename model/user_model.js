const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type : String,
        required : [true, 'Username is required'],
        unique : [true, 'Username is already exist'],
        minlength : [6, 'Username must be at least 6 characters'],
        maxlength : [20, 'Username must be at most 20 characters']
    },
    password : {
        type : String,
        required : [true, 'Password is required'],
        minlength : [6, 'Password must be at least 6 characters'],
        maxlength : [20, 'Password must be at most 20 characters']
    },
    email : {
        type : String,
        required : [true, 'Email is required'],
        minlength : [6, 'Email must be at least 6 characters'],
    },
    phoneNumber : {
        type : String,
    }
    },{
        collection : 'Users',
        timestamps : true,
    }
);

userSchema.pre('save', async function(next){
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    }catch(err){
        next(err);
    }
});

userSchema.pre('findOneAndUpdate',  function(next){
    try{
        const salt =  bcrypt.genSaltSync(10);
        const hashedPassword =  bcrypt.hashSync(this.getUpdate().password, salt);
        this.getUpdate().password = hashedPassword
        next();
    }catch(err){
        next(err);
    }
});

const User_Schema = mongoose.model('User', userSchema);

module.exports = {
    User_Schema
}


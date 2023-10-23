const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://minh_123:XR7aeW4zzvqce9MM@cluster0.r0yc3vf.mongodb.net/authen").
    then(()=>{console.log("connect success")});
}

module.exports = {
    connectDB
}
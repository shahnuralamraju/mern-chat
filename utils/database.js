const mongoose = require("mongoose");
const connectDb = () => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => console.log("mongodb connected"))
        .catch(err => console.log(err));
};
module.exports = connectDb;
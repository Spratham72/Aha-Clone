const mongoose = require("mongoose");
const connect = async () => {
  await mongoose.connect(
    "mongodb+srv://pratham:helloteam@movie.9qbso.mongodb.net/aha?retryWrites=true&w=majority"
  );
};
module.exports = connect;

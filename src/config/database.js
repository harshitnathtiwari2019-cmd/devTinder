const mongoose = require('mongoose');


const connectDB = async() => {
  await mongoose.connect(
  "mongodb+srv://namastedev23:spy2324@cluster23.yax1aq0.mongodb.net/devTinder"
);
};

module.exports = connectDB;





const uri = "mongodb+srv://akhildharmana0402:akhil%40098@websitebuildercluster.p8dgxjh.mongodb.net/WebsiteBuilder";
// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;

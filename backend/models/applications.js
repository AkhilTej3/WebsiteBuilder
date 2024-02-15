// nextAppModel.js
const mongoose = require('mongoose');

// Define the schema for Next.js application
const nextAppSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  version: { type: String },
  src: {
    app: {
      layout: { type: String },
      page: { type: String },
      favicon:{type:String},
      globalStyles: { type: String },
    },
  },
  packageJson:{
    type:String
  },
  packageLockJson:{
    type:String
  },
  tailwindConfigJs:{
    type:String
  },
});

// Create a model based on the schema
const NextApp = mongoose.model('NextApp', nextAppSchema);

module.exports = NextApp;

const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    
    phoneNumber:{
      type:String,
      required:true
    },
    message:{
      type:String,
      required:true
    },
    
  },
  {
    timestamps: true,
  }
);

const contactModel = mongoose.model("contact", contactSchema);

module.exports = contactModel;

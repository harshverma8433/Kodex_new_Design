const mongoose = require("mongoose");
const formSchema = new mongoose.Schema(
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
    
    phone:{
      type:String,
      required:true
    },
    course:{
      type:String,
      required:true
    },
    
  },
  {
    timestamps: true,
  }
);

const formModel = mongoose.model("form", formSchema);

module.exports = formModel;

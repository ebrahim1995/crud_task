import mongoose from "mongoose";

mongoose.connect("mongodb://mongo:27017/crud?authSource=admin").then(() => console.log("db connected")).catch(err => console.log(err))
import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://Janani:Jananimk30@cluster0.o7e2b.mongodb.net/blog-app');
    console.log("DB Connected");
}
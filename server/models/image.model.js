import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    image: String,
    description: String,
    price:Number,
    detail:String
},{timestamps:true})

const UserModel = mongoose.model("photo", UserSchema)
export default UserModel
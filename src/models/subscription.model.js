import mongoose,{Schema} from "mongoose"

const subscriptionSchema = new Schema({
    subscriber : {
        type : Schema.Types.ObjectId,
        ref:"User" 
    },
    channel : {
        type : Schema.Types.ObjectId, //one to whom 'subscriber' is subscribring
        ref : "User",

    }
},{timestamp:true})

export const Subsciption = mongoose.model("Subsciption",subscriptionSchema)
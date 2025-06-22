import { Schema } from "mongoose";
import mongoose from "mongoose";

const commentSchema = new Schema ({
    media:{
        type: String,
        required: true,
    },

    width:{
        type: Number,
        required: true,
    },

    height:{
        type: Number,
        required: true,
    },

    description:{
        type: String,
        required: true,
    },

    link:{
        type: String,
        required: true,
    },

    board:{
        type: Schema.Types.ObjectId,
        ref: "Board",
    },

    tags:{
        type: [String],
    },

    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true,
    },

   
    },
    {timestamps: true}
)
export default mongoose.model("Comment", commentSchema)
import { Schema } from "mongoose";
import mongoose from "mongoose";

const followSchema = new Schema ({
    follower:{
        type: String,
        required: true,
    },

    following:{
        type: Schema.Types.ObjectId,
        ref: "User",
    },

   
    },
    {timestamps: true}
)
export default mongoose.model("Follow", followSchema)
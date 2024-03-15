import mongoose, { Schema, mongo } from "mongoose"

const playlistSchema = new Schema(
  {
    name: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    videos: [
        {
            types: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
  },
  { timestamps: true }
)

export const Playlist = mongoose.model("Playlist", playlistSchema)

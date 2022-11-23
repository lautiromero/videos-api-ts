import { Schema, model } from "mongoose"
import { Video } from "../interfaces/video.interface"

const videoSchema = new Schema<Video>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  thumbnail: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    required: true
  },
  tags: {
    type: [String]
  },
  likes: {
    type: [Number],
    default: [0,0]
  }
},
{
  timestamps: true,
  versionKey: false
})

export default model('videos', videoSchema)
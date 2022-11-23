import videoModel from "../models/video"
import { Video } from "../interfaces/video.interface"

export const index = async () => {
  try {
    const videos = await videoModel.find()
    return videos
  } catch (error) {
    throw new Error(error.message)
  }
}

export const create = async (video: Video) => {
  try {
    checkDuplicated(video)
    await videoModel.create(video)
  } catch (err) {
    throw new Error(err.message)
  }
}

export const edit = async (id: string, video: Video) => {
  try {
    const edited = await videoModel.findByIdAndUpdate({_id: id}, video, {
      returnNewDocument: true
    })
    return edited._id
  } catch (err) {
    throw new Error(err.message)
  }
}

export const drop = async (id: string) => {
  try {
    const deleted = await videoModel.deleteOne({_id:id})
    if(!deleted.deletedCount) throw new Error(`Not found!`)
  } catch (err) {
    throw new Error(err.message);
  }
}

const checkDuplicated = async ({slug}: Video) => {
  console.log('in checkDuplicated func')
  videoModel.findOne({slug}, (result: Video) => {
    console.log(result)
    if(result) throw new Error('Title exist, try another.')
  })
}
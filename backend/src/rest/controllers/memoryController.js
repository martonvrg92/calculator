import { memoryService } from '../../services';

const get = async (req, res) => {
  let data = await memoryService.memoryRecall()
  res.status(200).json({data: data})
}

const post =  async (req, res) => {
  let number = req.body.data
  await memoryService.memorySave(number)
  res.status(200).json("saved to memory")
}

export default {
  get,
  post,
}
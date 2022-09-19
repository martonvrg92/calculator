import { memoryService } from '../../services';

const get = async (req, res) => {
  try {
    res.status(200).json({data: await memoryService.memoryRecall('./memory.txt')});
  } catch (error) {
    res.status(500).json(error);
  }
};

const post =  async (req, res) => {
  try {
    await memoryService.memorySave('./memory.txt',req.body.data);
    res.status(200).json({message: "saved to memory"});
  } catch (error) {
    res.status(500).json(error);
  }
};

export default {
  get,
  post,
};
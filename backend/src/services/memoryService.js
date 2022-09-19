import fs from 'fs/promises';

const memorySave = async (file, number) => {
  try {
    await fs.writeFile(file, number, "utf8")
  } catch (err) {
    console.log(err)
  }
}

const memoryRecall = async (file) => {
  try {
    return await fs.readFile(file, 'utf8')
  } catch (err) {
    console.log(err)
  }
}


export default {
  memoryRecall,
  memorySave,
}


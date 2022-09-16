import fs from 'fs/promises';

const memorySave = async (file, number) => {
  if (number != null) {
  await fs.writeFile(file, number, "utf8")
}}

const memoryRecall = async (file) => {
  return await fs.readFile(file, 'utf8')
}


export default {
  memoryRecall,
  memorySave,
}


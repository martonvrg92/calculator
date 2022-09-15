import fs from 'fs/promises';

const memorySave = async (number) => {
  if (number != null) {
  fs.writeFile('./memory.txt', number, "utf8", (err) => {
    if(err) {
      console.log('error', err)
    }
  })
}
}

const memoryRecall = async () => {
  const data = fs.readFile('./memory.txt', 'utf8', (err) => {
    if (err) console.log(err)
  })

  return data 
}


export default {
  memoryRecall,
  memorySave,
}
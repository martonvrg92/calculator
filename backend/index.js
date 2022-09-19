import dotenv from 'dotenv';
import server from './src/rest';

dotenv.config();
const PORT = process.env.PORT;

server.listen(PORT, ()=> {
  console.log(`Server started on port:${PORT}`);
});
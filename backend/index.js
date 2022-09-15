import express from 'express';
import routes from './src/rest/routes';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})

app.use(routes);

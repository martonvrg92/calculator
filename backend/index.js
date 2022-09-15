import express from 'express';
import routes from './src/rest/routes';
const app = express();
import cors from 'cors';

app.use(cors());
app.use(express.json())

app.listen(3001, () => {
  console.log("server started")
})

app.use(routes);

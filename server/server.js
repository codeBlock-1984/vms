import express from 'express';
import cors from 'cors';
import router from './routers/index';

const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to VMS!'
  });
});

app.listen(port, () => {
  console.log(`vms server listening on port ${port}`);
});

const express = require('express');
const app = express();
const cors = require('cors');
const compression = require('compression');
const mongoose = require('mongoose');
const mainRouter = require('./routes');
app.use(cors());
app.use(compression());

mongoose.connect(
  'mongodb+srv://momotalent2020:momotalent2020@cluster0.d4nvh.mongodb.net/<dbname>?retryWrites=true&w=majority',
  {
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log('Connect database error');
    else console.log('Connect database success');
  }
);

app.use('/api/v1', mainRouter);

app.listen(3000, () => {
  console.log('Server start on port 3000');
});

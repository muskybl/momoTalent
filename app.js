const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const compression = require('compression');
const mongoose = require('mongoose');
const mainRouter = require('./routes');
// require('./firebase/firebase')
// require('./localtunnel')
app.use(cors());
app.use(compression()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(
  'mongodb+srv://momotalent2020:momotalent2020@cluster0.d4nvh.mongodb.net/momo?retryWrites=true&w=majority',
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

// ssh -R 80:localhost:3000 ssh.localhost.run

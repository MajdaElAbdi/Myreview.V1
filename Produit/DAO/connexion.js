 
//pMCOKM63q6rgVL76

const mongoose = require('mongoose');
const URL='mongodb+srv://majda:pMCOKM63q6rgVL76@mycluster.yzgd4r9.mongodb.net/myreview';

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Get the connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports =
    {
      db
    };
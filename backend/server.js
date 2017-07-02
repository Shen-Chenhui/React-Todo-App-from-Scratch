import express from 'express';
const app = express();
import dbRoutes from './routes/databaseAccess.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import TodoItem from './models/TodoItem'
// This line makes the build folder publicly available.
if (! process.env.MONGODB_URI) {
  console.error('MONGODB_URI missing, make sure you run "source env.sh"');
  process.exit(1);
}

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise;
// check if the connection was successful
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error. did you remember to create env.sh?'));
db.once('open', function() {
  console.log("database successfully connected")
});

app.use(express.static('build'));
app.use(bodyParser.json());
app.use('/db', dbRoutes);


app.listen(3000, () => {
  console.log('Server for React Todo App listening on port 3000!')
});

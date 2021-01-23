'use strict';
import mongoose from 'mongoose';

//Set up default mongoose connection

export function dbConnect() {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  //Get the default connection
  const db = mongoose.connection;
  //Bind connection to error event (to get notification of connection errors)
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}

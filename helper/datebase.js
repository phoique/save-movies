import mongoose from 'mongoose';

function Connect() {
  mongoose.connect(process.env.DATEBASE_URL ,{ useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });

  // Datebase conneted
  mongoose.connection.on('open', () => console.log('Datebase connected.'));

  // Datebase connection error
  mongoose.connection.on('error', (error) => console.log('Datebase Error:', error));

  // Mongoose promise
  mongoose.Promise = global.Promise;
}

export default Connect;
import mongoose from 'mongoose';

const mongooseOptions = {
   useNewUrlParser: true,
   useCreateIndex: true,
   useFindAndModify: false
};

const database = () => {
   mongoose.connect(process.env.MONGO_URI, mongooseOptions).then(() => console.log('DB connected'));

   mongoose.connection.on('error', (err: any) => {
      console.log(`DB connection error: ${err.message}`);
   });
};

export default database;
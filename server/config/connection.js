const mongoose = require('mongoose');

try {
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:3001/deep-thoughts', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
   
  });
} catch (error) {
  console.log(error)
}



module.exports = mongoose.connection;

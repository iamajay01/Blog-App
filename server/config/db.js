require('dotenv').config(); // 👈 this must be at the top

const mongoose = require('mongoose');

mongoose.set('strictQuery', true); // optional, to handle the deprecation warning

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error:', err));

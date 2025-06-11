const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/shop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Роуты
app.use('/api/spin', require('./routes/spin'));
app.use('/api/purchase', require('./routes/purchase'));

// Запуск сервера
app.listen(3001, () => {
  console.log('Backend работает на порту 3001');
});

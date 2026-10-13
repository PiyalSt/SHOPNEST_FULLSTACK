const express = require('express');
const dotenv = require('dotenv');
const connect_db = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// connect mongodb
connect_db();

app.use(cors());
app.use(express.json());

// routes
app.use('/api/shopnest/v1/users', userRoutes)
app.use('/api/shopnest/v1/products', productRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
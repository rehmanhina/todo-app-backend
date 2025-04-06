const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const totdRoutes = require('./routes/todoRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/todos',totdRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=> {
    app.listen(process.env.PORT,() =>{
        console.log('Server running on port ${process.env.PORT}');

    });
})
.catch(err => console.log(err));
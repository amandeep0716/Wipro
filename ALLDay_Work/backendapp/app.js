const express = require('express');
const app = express();
const userRoutes = require("./routes/user");
const userMongoRoutes = require("./routes/user_mongodb");
const {connectdb} = require('./database/db_mongodb');
connectdb();
app.use('/api/mongodb/users', userMongoRoutes);

app.use('/api/users', userRoutes);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
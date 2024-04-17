const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({path: './config.env'});

const DB = process.env.DATABASE

mongoose.connect(DB).then(() => console.log("DB Connection Successful!"));

// Start Server //
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`App running on port ${port}...`)
});
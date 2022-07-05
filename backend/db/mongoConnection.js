const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://wildermedeiros:qzUawfDbn9Dww6WR@cluster0.ff2rpgh.mongodb.net/?retryWrites=true&w=majority',
    // {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    // },
    () => {
        console.log("Connected to MongoDB");
    }
);

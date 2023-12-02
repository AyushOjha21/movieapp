const mongoose = require('mongoose');

const connectionString =
"mongodb+srv://ayush2101:Ayush210302@cluster0.l7feo0f.mongodb.net/moviesdb";

async function connectToDatabase(){
    await mongoose
    .connect(connectionString)
    .then((res) => console.log("Connected to db successfully"))
    .catch((ex) => console.log(ex));
}

module.exports = {connectToDatabase};
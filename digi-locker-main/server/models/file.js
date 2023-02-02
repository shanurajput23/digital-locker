// imports 
const mongoose = require('mongoose');

const File = new mongoose.Schema({
    fileName: String,
    filePath: String,
    fileSize: Number,
    fileExtension: String,
});

module.exports = mongoose.model("File", File);

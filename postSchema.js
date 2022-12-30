let mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, default: Date.now },
    tags: [{ type: String }]
});
  
module.exports = mongoose.model('Post', postSchema);
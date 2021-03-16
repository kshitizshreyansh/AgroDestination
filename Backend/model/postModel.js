const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    id: { type: String, required: true },
   
    title: { type: String, required: true },
    description: { type: String, required: true },
    
});

module.exports = mongoose.model("Post", postSchema);

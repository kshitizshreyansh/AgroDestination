const mongoose = require('mongoose');

const scropSchema = mongoose.Schema({
    id: { type: String },
    title: {type: String, required: true},
    category: { type: String, required: true},
    image: { type: String, required: true},
    
});

module.exports = mongoose.model("Scrop", scropSchema);

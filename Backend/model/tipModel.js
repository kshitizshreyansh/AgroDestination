const mongoose = require('mongoose');

const tipSchema = mongoose.Schema({
    id: { type: String, required: true },
   
    title: { type: String, required: true },
    description: { type: String, required: true },
    
});

module.exports = mongoose.model("Tip", tipSchema);

const mongoose = require('mongoose');

const cropSchema = mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: String, required: true },
    imagePath: { type: String, required: true}
});

module.exports = mongoose.model("Crop", cropSchema);

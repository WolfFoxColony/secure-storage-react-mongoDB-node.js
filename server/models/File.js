const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    originalName: String,
    url: String,
    uploadedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("File", fileSchema);

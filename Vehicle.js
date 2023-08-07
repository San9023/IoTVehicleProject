const mongoose = require('mongoose')

const vehicleDataSchema = new mongoose.Schema({
    event: String,
    happendAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model("VechileData", vehicleDataSchema)
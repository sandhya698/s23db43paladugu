const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
manufacturer: String,
model: String,
price: Number
})
module.exports = mongoose.model("car", 
carSchema)

// for a specific car.
exports.car_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await car.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    
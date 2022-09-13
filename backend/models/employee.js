const mongoose = require("mongoose");
const {Schema } = mongoose;

const EmployeeSchema = new Schema({
    nombre:{ type: String, required:true},
    cargo: { type: String, required:true},
    email: { type: String, required:true},
    telefono: { type: Number, required:true}
});
module.exports = mongoose.model("Employee",EmployeeSchema);
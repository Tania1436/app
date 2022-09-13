const Employee = require("../models/employee");
const employeeCtrl ={};

employeeCtrl.getEmployees =async (req, res)=>{
   const employees = await Employee.find();
   res.json(employees);

};
employeeCtrl.createEmployee= async(req, res)=>{
 const employee = new Employee({
    nombre: req.body.nombre,
    cargo: req.body.cargo,
    email: req.body.email,
    telefono: req.body.telefono,

 });
 await employee.save();
 res.json({
    "status":"empleado guardado"

 });


};
employeeCtrl.getEmployee=  async(req, res)=>{
    const employee = await Employee.findById(req.params.id);
    res.json(employee);

}
employeeCtrl.editEmployee= async(req, res)=>{
    const {id} = req.params;
    const employee ={
        nombre: req.body.nombre,
        cargo: req.body.cargo,
        email: req.body.email,
        telefono: req.body.telefono,

    };
    await Employee.findByIdAndUpdate(id,{$set: employee}, {new:true});
    res.json({status: "empleado actualizado"});

}
employeeCtrl.deleteEmployee= async(req, res)=>{
    await Employee.findByIdAndDelete(req.params.id);
    res.json({status: "empleado eliminado"});

};
module.exports = employeeCtrl;
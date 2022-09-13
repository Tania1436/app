const express = require("express");

const morgan = require("morgan");
const cors = require("cors");

const app =express();
const { mongoose } = require("./database");
//settings
app.set("port", process.env.PORT|| 3000);
//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({origin: "http://localhost:4200"}));

//routers
app.use("/api/employees",require("./routers/employee.routers"));

//starting the server
app.listen(app.get("port"),()=>{
    console.log("server on port",app.get("port"));
});
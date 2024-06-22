const express = require("express");

//create a web-server
const app = express();
const port = 8000;

//127.0.0.1 = localhost
app.listen(8000,()=>{
    console.log("Server is running on http://localhost:8000");
})

//lsof -i tcp:8000 如果要把8000端口的东西kill掉
//control c退出运行
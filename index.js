const express =require('express');

const product = require('./api/product');
const app = express();

const port = process.env.port || 5050;

app.use("/api/product",product)
app.listen(port,()=>{console.log(`Server is running in port ${port}`)});
import express from 'express';

import path1 from 'path';
import {fileURLToPath} from 'url';


const app=express();

const __filename =fileURLToPath(import.meta.url);
const __dirname =path1.dirname(__filename);

const PORT =8000;

app.get("/",(req,res)=>{
    res.sendFile(path1.join(__dirname,"views","test.html"));

});

app.use(express.static(path1.join(__dirname,"views")));

app.listen(PORT,()=>{console.log("Server is running on http://localhost:3000")});

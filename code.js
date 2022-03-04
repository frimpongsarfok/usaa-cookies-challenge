const http=require('http');
const express=require('express');
const cookieParser =require('cookie-parser');
const app=express();
//const HOST='localhost';
const PORT=3500;
app.use(cookieParser());
app.get('/login', (req, res) => {
   res.cookie('username','Galvanize');
   res.send('login successful')
})
app.get('/hello', (req, res) => {
    res.send(`Welcome ${req.cookies.username}`);
})

//const server=http.createServer((req,res)=>res.end('Hello Galvanize'));
app.listen(PORT,()=>console.log(`Server is running on ${PORT}`));



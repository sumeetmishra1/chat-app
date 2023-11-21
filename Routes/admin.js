const express=require('express');
const fs=require('fs');

const router=express.Router();

router.get('/',(req, res, next)=>{
    fs.readFile("chat.txt",{encoding : "utf-8"},(err,data)=>{
        if(err){
            console.log(err)
        }
    res.send(`<body>${data}</body><form action="/chat" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST"><input type="text" name="title">
    <input type="hidden" name="username" id="username">
    <button type="submit">send</button></form>`);
    })
});
router.post('/chat',(req,res,next)=>{
   
        fs.appendFile('chat.txt',`${req.body.username} : ${req.body.title}`,(err)=>{
            res.statusCode=302;
            res.setHeader('Location','/')
            return res.end();
        }) 
    })

module.exports=router;
const express=require('express');
const fs=require('fs');

const router=express.Router();

router.get('/',(req, res, next)=>{
    fs.readFile("chat.txt",{encoding : "utf-8"},(err,data)=>{
        if(err){
            console.log(err)
        }
    res.send(`<body>${data}</body><form action="/chat" method="POST"><input type="text" name="title"><button type="submit">send</button></form>`);
    })
});
router.post('/chat',(req,res,next)=>{
    const body=[];
    req.on('data',(chunk)=>{
        body.push(chunk);
    });
   return req.on('end',()=>{
        const parsedbody = Buffer.concat(body).toString();
        const message =parsedbody.split('=')[1];
        fs.appendFile('chat.txt',message,(err)=>{
            res.statusCode=302;
            res.setHeader('Location','/')
            return res.end();
        }) 
    })
})
module.exports=router;
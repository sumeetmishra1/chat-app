const express=require('express');

const router=express.Router();

router.get('/login',(req, res, next)=>{
    res.send(` <form  action="/login" onsubmit="localStorage.setItem('username',document.getElementById('username').value)" method="POST" >
    <input type="text" id="username" name="title">
    <button type="submit">login</button></form>`);
    
});
router.post('/login',(req,res)=>{
    console.log('hjhh')
    res.redirect('/')
})
module.exports=router;
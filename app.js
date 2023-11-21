const express=require('express');
const app = express();
const bodyparser=require('body-parser');
const adminroutes=require('./Routes/admin');
const loginroutes=require('./Routes/login');
app.use(bodyparser.urlencoded({extended:true}));
app.use(loginroutes);
app.use(adminroutes);
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
})

app.listen(3000);
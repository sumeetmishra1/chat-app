const express=require('express');
const app = express();
const adminroutes=require('./Routes/admin');
const loginroutes=require('./Routes/login');
app.use(loginroutes);
app.use(adminroutes);
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
})

app.listen(3000);
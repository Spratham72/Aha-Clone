const port=process.env.PORT || 1234;
const express=require('express');
const connect=require('./config/db');
const movieController=require('./controller/movieController');
const app=express();
app.use(express.json());
app.use('/movie',movieController);
const start=async()=>{
await connect();
app.listen(port,()=>{
    console.log('Server is live on port 1234')
})
}
module.exports=start;
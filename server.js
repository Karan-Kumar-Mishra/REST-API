//REST FULL API
const express = require('express')
let users= require('./Data.json')
const fs=require('fs');
const { json } = require('body-parser');
const app= express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/',(req,res)=>{
    res.send("<h1> Api server <h1/>");
})
app.get('/api/users',(req,res)=>{
    const html=`
     <ul>
      ${users.map((users)=>`<li> ${users.first_name}`)}
     </ul>
    `;
   res.send(html)
})
app.get('/api/:id',(req,res)=>{
    const key=Number(req.params.id);
    const finduser= users.filter(user=> user.id===key)
    res.send(finduser)
})
app.post('/api/users',(req,res)=>{
  const create_user={
    id:users.length+1,
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    email:req.body.email,
    gender:req.body.gender,
    ip_address:req.body.ip_address
  }
  users.push(create_user)
  fs.writeFileSync('Data.json',JSON.stringify(users))
  res.send("User added .")
})
app.put('/api/users',(req,res)=>{
    const key=Number(req.body.key);
    const findIndex= users.findIndex(user=> user.id===key)
    const create_user={
        id:users.length+1,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        gender:req.body.gender,
        ip_address:req.body.ip_address
      }
    users[findIndex]=create_user;
    fs.writeFileSync('Data.json',JSON.stringify(users))
    res.send("User is updated.")

})
app.delete('/api/delete',(req,res)=>{
   const key=Number( req.body.key)
   const deleted_user= users.filter(user=> user.id!==key)
   fs.writeFileSync('Data.json',JSON.stringify(deleted_user))
   res.send("User is deleted.")
})
app.listen(80,()=>{
    console.log("Server is running ..");
})
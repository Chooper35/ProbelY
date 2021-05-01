const express = require('express');
const oracledb = require('oracledb');
const {accessControl} = require('./middleware');

const users = [
  {id: 1, ad: 'Ayberk', soyad: 'Düzova'},
  {id: 2, ad: 'Berkan', soyad: 'Düzova'},
];
const app = express();
const port = 3000;

app.use(express.json());

app.get('/users', (req, res) => {
  res.json({
    success:true,
    data:users,
  });
});

app.post("/users",(req,res,next) =>{
  console.log(req.body);
  const user = req.body;
  users.push(user);
  res.json({
    success:true,
    data:users,
  });

});
app.put('/users/:id', (req, res,next) => {
  const id =parseInt(req.params.id);
  for(let i=0;i<users.length;i++){
    if(users[i].id===id){
      users[i] ={
        ...users[i],
        ...req.body
      };
    }
  }
  console.log(req.params.id);
  res.json({
    success:true,
    data:users,
  });
});
app.delete('/users/:id', (req, res,next) => {
  const id =parseInt(req.params.id);
  for(let i=0;i<users.length;i++){
    if(users[i].id===id){
      users.splice(i,1);
    }
  }
  res.json({
    success:true,
    data:users,
  });
});



app.listen(port, () => {
  console.log(`Dinliyorum gözlerim kapalı http://localhost:${port}`);
});

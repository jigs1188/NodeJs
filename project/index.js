const express = require('express');

const users=require('./MOCK_DATA.json')

const fs=require('fs')

const app = express();

const port = 3000;



// middleware

app.use((req, res, next) => {
    console.log('hello from middleware');
    next();
})

app.use((req, res, next) => {
    fs.appendFile('log.txt', `${Date.now()} ${req.ip} ${req.method}: ${req.path}\n`, (err, data) => {

        next();
    })
})

app.get('/api/users', (req, res) => {
    res.json(users)
})

app.get('/users', (req, res) => {
    const html=`
    <ui>
        ${users.map(user=>`<li>${user.first_name}</li>`).join('')}
    </ui>
    `
    res.send(html)
})

app.get('/api/users/:id', (req, res) => {
    // todo:get user
    console.log(req.params)
    const Id=Number(req.params.id);
    const user=users.find(user=>user.id===Id);
    res.json(user)
})


// miidleware-plugin

app.use(express.urlencoded({extended:false})) //-> req.body

app.post('/api/users', (req, res) => {
    // todo:create new user
    const body=req.body
    users.push({id:users.length+1,...body})

    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{

        return res.json({status:'success',id:users.length})

    });

})

app.patch('/api/users/:id', (req, res) => {
    // todo:update user
    res.json({status:'pending'})
})

app.delete('/api/users/:id', (req, res) => {
    // todo:delete user
    res.json({status:'pending'})
})

/*
this is same as above as path or routes is same

app.routes('/api/users/:id').get((req, res) => {}).
post((req, res) => {}).
patch((req, res) => {}).
delete((req, res) => {}).

*/ 
app.listen(port, () => {
    console.log(`server startet on port ${port}`);
})
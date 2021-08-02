const express = require('express')
const data = require('./data/data.json')
const PORT = 3000;

var app = express();

app.use(express.static('public/images'))
app.use('/image',express.static('image'))

app.get('/item/:id',(req,res,next)=> {
    console.log(req.params.id)
    let user = Number(req.params.id);
    console.log(data[user])
    //everything above is middleware (before sending response we are doing some task)
    res.send(data[user]);
    next()
}, ()=>{
    console.log("Did you get the right data")
}
)

//if you have multiple parameters
// app.get('/item/:first_name/:id',(req,res)=> {
//     console.log(req.params.id)
//     let user = Number(req.params.id);
//     console.log(data[user])
//     res.send(data[user]);
// })

app.get('/',(req,res) => {
    res.send('A Get request is called at port '+ PORT);
    console.log('Get method');
});

app.post('/newItem',(req,res) => {
    res.send('A Post request is called at port '+ PORT);
    console.log('Post method');
});

app.put('/putItem',(req,res) => {
    res.send('A Put request is called at port '+ PORT);
    console.log('Put method');
});

app.delete('/deleteItem',(req,res) => {
    res.send('A delete request is called at port '+ PORT);
    console.log('delete method');
});

app.route('/item')
    .get((req,res) => {
        res.send('A Get request is called at port '+ PORT);
        console.log('Get method');
    })
    .put((req,res) => {
        res.send('A Put request is called at port '+ PORT);
        console.log('Put method');
    })
    .delete((req,res) => {
        res.send('A delete request is called at port '+ PORT);
        console.log('delete method');
    })
    .post((req,res) =>{
        res.send('A post request is called at port '+ PORT);
        console.log('post method');
    })


app.listen(PORT, () => {
    console.log('server is listening at port ${PORT}')
});
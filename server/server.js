const express = require('express')
//const cors = require('cors')
const app = express()
const path = require('path')

app.use(express.static(`public`))//it will serve all the files under public folder including images,css,js etc
//app.use(cors())
app.use(express.json());
// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '9447d1d04f9746e8bfe1fb93dbc3e0cd',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.get('/',(req,res) => {
    try{
    res.sendFile(path.join(__dirname,'../public/index.html'))
    }
    catch(e){
        rollbar.critical("issue connecting to a server/API")
        res.status(400).send(' Problem connecting to the page'); 
    }
})



app.get('/api/cat', (req, res) => {

    try{
        rollbar.log("you are entering into the world of cats");
 
    res.status(200).send('We are Pingu and Malik');
    }catch (e){
        rollbar.critical("issue connecting to server")
        res.status(400).send(' Problem connecting to the page'); 
    }
})

app.get('/api/video', (req, res) => {

    try{
        rollbar.log("you are going to access cat videos ");
 
    res.status(200).send('We are Pingu and Malik');
    }catch (e){
        rollbar.critical("issue connecting to server to view video")
        res.status(400).send(' Problem connecting to the page'); 
    }
})

app.listen(4000, () => console.log(`server running on 4000`));
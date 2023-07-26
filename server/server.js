const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(`public`))

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

app.get('/api/cat', (req, res) => {
    
    res.status(200).res.send('YOu are soo adorable');
})

app.listen(4000, () => console.log(`server running on 4000`));
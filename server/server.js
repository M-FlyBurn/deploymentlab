const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())
app.use(express.static(`${__dirname}/public`))
app.get('/',(req,res)=>{
res.status(200).sendFile(path.join(__dirname,"../public/landing.html"))
})
app.listen(4000, () => console.log(`server running on 4000`))

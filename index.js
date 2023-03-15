const express = require('express')


const App = express()


const PORT = process.env.PORT || 6000


App.get('/',(req,res)=>{
    res.send('the server is running successfully this is test ')
})


App.listen(PORT,()=>{
    console.log('server is listening on port 5000')
})
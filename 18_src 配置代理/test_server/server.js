const express = require('express')

const app = express()
app.use(express.static(__dirname+'/static'))

app.get('/person',(req,res) => {
    res.send({
        name:'rhys',
        age:18
    })
})

app.listen(5005,(error) => {
    if(!error) console.log('服务器启动成功了');
})
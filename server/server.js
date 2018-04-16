const express = require('express');
const app = express();
app.get('/', function(req, res){
    res.send('<h1>hello a</h1>');
})

app.get('/data', function(req, res){
    res.json({a:1,b:2});
})

app.listen(9093, function(){
    console.log('app start at port 9093');
})
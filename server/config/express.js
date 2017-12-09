var express=require('express');
var serveStatic=require('serve-static');
var path=require('path');
var app=express();

app.use( express.static(path.join(__dirname,'../../' ,  'static' ) ) );

module.exports=app;
var express = newFunction();
var serveStatic=require('serve-static');
var path=require('path');

var app=express();
app.use(express.static(path.join(__dirname,'../../','static')));

require('./express_parttwo')(app,express);


//app.use( express.static(path.join(__dirname,'../../' ,  'static' ) ) );
//app.use(serveStatic('../../static/public/',{'index':['index.html','index.htm']}));
module.exports=app;

function newFunction() {
    var express = require('express');
    return express;
}

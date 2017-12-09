var app=require('./config/express')
//app.use(serveStatic(__dirname+'/first'));
app.listen(3000, () => {
    console.log('server sarted on 3000')
});
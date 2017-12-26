var app=require('./config/express_partone')
//app.use(serveStatic(__dirname+'/first'));
app.listen(3000, () => {
    console.log('server sarted on 3000')
});
var compression=require('compression');
var errorHandler= require('errorhandler');
var bodyParser=require('body-parser');


module.exports=function(app,express){

    var router=express.Router();
    
    require('../routes/mainRoutes')(router);
    app.use(compression());
    /*app.use(bodyParser.urlencoded({
        extended:false
    }));*/
    app.use(bodyParser.json());
    app.use('/',router);
}
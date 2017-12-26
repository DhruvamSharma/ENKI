module.exports=function(router){

    router.get('/:id',function(req,res){
        var id=req.params.id;
        res.send(id);
    })

    router.get('/:id1/:id2',function(req,res){
        var id1,id2;

        //working with destructuring arrays
        
        [id1,id2]=[req.params.id2,req.params.id1];
        

        //part 2
        var source = { company : 'ENKI'};
        var {company : v1 , topic : v2=100} = source;
        console.log(v1+v2);
        console.log(v1);

        //part 3
        var myArray;
        [...myArray]=[1,2,3];
        console.log(myArray);
        [id1,,id2]=myArray;
        console.log(id1+id2);

        //part 5
        var iEntries=myArray.entries();
        var myObject=iEntries.next();
        var myObject=iEntries.next();
        var myObject=iEntries.next();
        var myObject=iEntries.next();
        console.log(myObject);
        res.send(v1);
    })
}
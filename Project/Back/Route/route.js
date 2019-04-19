const express = require('express');
const fs = require('fs');

module.exports = function (app){
    app.post('/', function (req, res) {
        res.send('')
   })
   app.post('/list', function (req, res) {
        try {
             var read = fs.readFileSync('./Model/note.json', 'utf8')
             var parser = JSON.parse(read)
             
             for (let i = 0; i < parser.length; i++) {
                 
                  app.post(parser[i].Image, function (req, res) {
                       try {
                            var iamageRouter = '.' + parser[i].Image
                            var lireImageRouter = fs.readFileSync(iamageRouter)
                            console.log(lireImageRouter)
                            res.write(lireImageRouter)
                            res.end()
   
                       } catch (e) {
                            console.log(e.stack);
                       }
                  })
             }
             res.write(read)
             res.end()
        } catch (ev) {
             console.log(ev.stack)
        }
   })
   
   app.get('/test', function (req, res) {
        let read = fs.readFileSync('./Model/test.json', 'utf8')
        res.write(read)
        res.end()
   })
   app.post('/test',function(req, res){
       
        
        var Nom = req.body.Nom
        var Prenom = req.body.Prenom
        try {
             var r = fs.readFileSync('./Model/test.json', 'utf8')
             var s = JSON.parse(r)
             var Id = s[s.length-1].Id +1;
             s.push({"Id":Id,"Nom":Nom,"Prenom":Prenom})
        
        } catch(e){
             console.log(e.stack);   
        }
        fs.writeFileSync('./Model/test.json',JSON.stringify(s))
   
     //    res.send(s)
     res.redirect('http://localhost:3000/test')
        //console.log(s);
        
   
   })
   
   app.put('/test',function(req, res){
        var Id = req.body.Id
        var nom = req.body.Nom
        var prenom = req.body.Prenom
        var r = fs.readFileSync('./Model/test.json', 'utf8')
        var s = JSON.parse(r)
        for(let i=0;i<s.length;i++){
        if(s[i].Id== Id){
   
             if( nom){
                  s[i].Nom=nom;
             }
             if(prenom){
                  s[i].Prenom=prenom;
             }
        }
        }
             console.log(s); 
          //    res.send(s)
          res.redirect('http://localhost:3000/test')
             fs.writeFileSync('./Model/test.json',JSON.stringify(s))
        
   
   })
   
   
   app.delete('/test',function(req, res){
             var Id=req.body.Id
             var r=fs.readFileSync('./Model/test.json','utf-8')
             var s= JSON.parse(r)
             for(var i=0;i<s.length;i++){
                  if(s[i].Id==Id){
                       s.splice(i,1)
                  }    
             }
               //     res.send(s) 
               res.redirect('http://localhost:3000/test')
                   fs.writeFileSync('./Model/test.json', JSON.stringify(s))
                  
                   console.log(s); 
           });
       
}




















        
     



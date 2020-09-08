var fs = require('fs');
fs.writeFile('demo.txt','this is node demo',function(err){
    if (err){
        return console.log(err);
    }
    console.log('file created');
});

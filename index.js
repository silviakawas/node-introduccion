const port = 8000;
const express = require('express');
const app = express();
const fs = require('fs');

const testFile = __dirname + '/data/test.json';

/* middleware */
app.use(express.static(__dirname + '/public'));

// app.get('/test', async(req, res)=> {

//     /* Callback error first */

//     fs.readFile(testFile, (err, data)=>{
            // if (err){
            //     res.send('Error al leer el archivo');
            //     return;
            // }

            // const jsonData = JSON.parse(data);

            // res.send(jsonData);
            // });
// });

app.get('/test', async(req, res)=> {

    /* Callback error first */

    try{
        const data = fs.readFile(testFile);
        const jsonData = await JSON.parse(data);
        res.send(jsonData);
    }catch(err){
        res.send('Error al leer el archivo');
    }
});


app.get('/about', (req, res)=>{
    res.sendFile(__dirname + '/public/about.html');
});

app.get('/contact', (req, res)=>{
    res.sendFile(__dirname + '/public/contact.html');
});




app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
const express = require('express')
const app = express();
// require('./db/conn');
const hbs = require('hbs')
const path = require('path')
const router = require('./router/route')

const port = process.env.port || 8000 ;

//setting path 
const staticPath = path.join(__dirname , '../public')
const templates = path.join(__dirname , '../templates/views')
const partialsPath = path.join(__dirname , '../templates/partials')

app.use(express.json());
app.use(express.urlencoded());

//setting templates engine
app.use(express.static(staticPath))
app.set('view engine' , 'hbs');
app.set('views' , templates);
hbs.registerPartials(partialsPath);


//Setting router to use at particular endpoints
app.use(router);




app.listen(port , (req ,res)=>{
    console.log("Listening to the port 8000");
})
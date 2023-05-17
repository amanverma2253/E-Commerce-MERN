const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error');
const cookieparser = require('cookie-parser');
const bodyParser = require('body-parser');



app.use(express.json());
app.use(cookieparser());
app.use(bodyParser.urlencoded({extended:true}));


//routes imports
const product = require('./routes/productRoute');
const user= require('./routes/userRoute'); 




app.use('/api/v1',product);
app.use('/api/v1',user)



//Middleware for error
app.use(errorMiddleware);
   
module.exports = app;



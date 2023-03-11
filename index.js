const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const productsRoute = require('./routes/v1/product.route')
const errorHandler = require('./middleware/errorHandler')

//middlware
app.use(express.json())
app.use(cors());
app.set("view engine","ejs");
app.use(express.static("public"));

app.use('/api/v1/products',productsRoute);
app.use('/api/v1/products',productsRoute);

app.use(errorHandler);

app.get('/', (req, res) => {
    // res.send('Hello World!')
    //Send a static files
    // res.sendFile(__dirname +"/public/text1.html")
    res.render("/view/home.ejs",{
        id:2000,
        user:{
            name:"text"
        }
    })
  });



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
process.on('unhandleRejection',(error)=>{
    console.log(error.name, err.message);
    app.close(()=>{
        process.exit(1)
    });
});
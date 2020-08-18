const express = require('express')
const mongoose  = require('mongoose');
const dotenv = require('dotenv');
const app = express()
var bodyParser = require('body-parser')

dotenv.config({path:'./config.env'});

const port = 3000
app.use(bodyParser.json())
const userRouter = require('./routes/userRoutes');

const DB = process.env.DATABASE_LOCAL
mongoose
	.connect(DB,{
		useNewUrlParser: true,
		useCreateIndex:true,
		useFindAndModify:false,
		useUnifiedTopology: true
	})
	.then(con=>{
		//console.log(con.connections);
		console.log('DB connections Sucessfull');
	});



app.use('/api/users',userRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
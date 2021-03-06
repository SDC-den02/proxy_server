const express = require('express'); 
const morgan = require('morgan'); 
const path = require('path'); 
const app = express(); 
const port = process.env.PORT || 3009;
const cors = require('cors'); 


app.use(cors()); 
app.use(morgan('dev')); 
app.use(express.static(path.join(__dirname + '/proxy/public'))); 

app.listen(port, () => {
  console.log(`server running at: http:localhost:${port}`)
}); 
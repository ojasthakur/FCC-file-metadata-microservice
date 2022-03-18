var express = require('express');
var cors = require('cors');
require('dotenv').config()
const fileUpload = require('express-fileupload')

var app = express();



app.use(cors());
app.use(fileUpload({useTempFiles:true}))
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', (req, res) => {
  console.log(req.files.upfile)
  const uploadedFile = req.files.upfile
  res.json({
    name: uploadedFile.name,
    type: uploadedFile.mimetype,
    size: uploadedFile.size
  })
})


const port = process.env.PORT || 3000;  
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

const connection = require('./Connection/db');
const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars'); 
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT || 3000;

const controller = require('./router/userRoot');

app.use(
  bodyParser.urlencoded({
    extension: true,
  })
);

app.use(bodyParser.json());

app.set('views', path.join(__dirname, '/views/'));

app.engine(
  'hbs',
  exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'mainlayout',
    layoutDir: __dirname + '/views/layouts',
    runtimeOptions: {
      //You can add a runtime option to disable the check or this warning: for solving these warning to add
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  //   res.send(`<h1>hello World</h1>`);
  res.render('index', {});
});

app.use('/user', controller);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
 
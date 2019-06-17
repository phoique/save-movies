import express from 'express';
import dotenv from 'dotenv';
import hbsExpress from 'express-handlebars';
dotenv.config();

const app = express();

// Template engine. Default layout. layout.hbs
const settings = hbsExpress.create({
  defaultLayout: 'layout', 
  extname: 'hbs'
});
app.engine('hbs', settings.engine);
app.set('view engine', 'hbs');

// Static file css, js...
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {title: 'Anasayfa'});
});

app.get('/movies', (req, res) => {
  res.render('movies', {title: 'Filmler'});
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started: ${process.env.PORT}`);
});
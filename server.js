import config from './config';
import express from 'express';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import './serverRender';
// import fs from 'fs';

const server = express();

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');
server.get('/', (req, res) => {
  res.render('index', {
    content: '...'
  });
});

//For developemt purpose using middle ware
server.use(express.static('public'));
server.use('/api', apiRouter);
// server.get('/about.html', (req, res) => {
//   fs.readFile('./about.html', (err, data) => {
//     res.send(data.toString());
//   });
// });
server.get('/profile.html', (req,res) => {
  res.send('Profile');
});
server.listen(config.port, config.host, () => {
  console.info('Express listening on port ', config.port);
});

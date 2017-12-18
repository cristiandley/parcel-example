import proxy from "http-proxy-middleware";
import express from "express";
import path from "path";

const app = express();


/**
 * VIEW ENGINE
 */

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'));
/**
 * RUTAS
 */

app.get('/', (req, res) => {
  res.render('index', {
    titulo: 'Hey',
    mensaje: 'Hello there!'
  })
});

app.get('/login', (req, res) => {
  res.send('Login View')
});

app.post('/login', (req, res) => {
  res.send('Login Controller')
});

app.get('/logout', (req, res) => {
  res.send('Logout View')
});

app.get('/account', (req, res) => {
  res.send('User Data')
});

app.get('/dialog/authorize', (req, res) => {
  res.send('OAuth2 Authorization')
});

app.post('/dialog/authorize/decision', (req, res) => {
  res.send('OAuth2 Decision')
});

app.post('/oauth/token', (req, res) => {
  res.send('OAuth2 token')
});

app.get('/api/userinfo', (req, res) => {
  res.send('User Info')
});

app.get('/api/clientinfo', (req, res) => {
  res.send('Client Info')
});

/**
 * PORT Y ESCUCHA
 */

app.listen(4000, () => console.log('OAUTH-DGIPJ ::::: 4000!'))

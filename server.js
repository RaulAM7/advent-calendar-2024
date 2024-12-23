const bGround = require('fcc-express-bground');
// Nos importamos los routers
const jsfile1 = require('./advent-calendar-router');

// Montamos el objeto app express del server
const express = require('express');
const app = express();

// Configuramos los routers
app.use(jsfile1);


if (!process.env.DISABLE_XORIGIN) {
  app.use((req, res, next) => {
    const allowedOrigins = ['https://narrow-plane.gomix.me', 'https://www.freecodecamp.com'];
    const origin = req.headers.origin || '*';
    if(!process.env.XORIG_RESTRICT || allowedOrigins.indexOf(origin) > -1){
         console.log(origin);
         res.setHeader('Access-Control-Allow-Origin', origin);
         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    }
    next();
  });
}

const port = process.env.PORT || 3000;
bGround.setupBackgroundApp(app, app, __dirname).listen(port, () => {
  bGround.log(`Node is listening on port ${port}...`);
});
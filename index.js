const Koa = require('koa');
const router = require("./app/router");
const app = new Koa();
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const render = require('koa-ejs');
const path = require('path');
const static = require('koa-static');

const port = 3000 || 80;
app.use(static('public'));
render(app, {
    root: path.join(__dirname, 'views'),
    layout: false,
    viewExt: 'html',
    cache: false,
    debug: false
  });
app.use(cors());
app.use(bodyParser({
    extendTypes: {
      json: ['application/x-javascript'] // will parse application/x-javascript type body as a JSON string
    }
  }));
//Routes 
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log(`listening on ${port}`)
})
const Koa = require('koa');
const router = require("./app/router");
const app = new Koa();
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');

const port = 3000
app.use(cors());
app.use(bodyParser({
    extendTypes: {
      json: ['application/x-javascript'] // will parse application/x-javascript type body as a JSON string
    }
  }));
//Routes 
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})
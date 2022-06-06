const Koa = require('koa');
const router = require("./app/router");
const app = new Koa();

const port = 3000
//Routes 
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})
const Koa = require('koa');
const app = new Koa();
const port = 3000
app.use((ctx) => {
    console.log('ctx', ctx);
    ctx.body = 'hello World';
})

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})
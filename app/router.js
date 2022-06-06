const Router = require('@koa/router');
const router = new Router();


router.get('/', (ctx) => {
    ctx.body = "Hello World";
});
router.get('/test', (ctx) => {
    ctx.body = "page test";
});
router.post('/test', (ctx) => {
   const body = ctx.request.body;
   console.log('body', body);
    ctx.body = "test pour le body qui est :" + JSON.stringify(body);
});
   
module.exports = router;
const Router = require('@koa/router');
const router = new Router();


router.get('/', (ctx) => {
    ctx.body = "Hello World";
});
router.get('/test', (ctx) => {
    ctx.body = "page test";
});
   
module.exports = router;
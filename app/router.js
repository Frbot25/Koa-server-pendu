const Router = require('@koa/router');
const router = new Router();
const dico = ["test","manger"];
const gameControllers = require('./controllers/gameControllers');
let max = 0;
const random = "";
function getRandomArbitrary(min, max) {
    return random = Math.floor(Math.random()* max + 1);
  }
router.get('/', async(ctx) => {
     await ctx.render('main')
});
router.get('/game',gameControllers.hangMann);

router.post('/test', (ctx) => {
   const body = ctx.request.body;
   console.log('body', body);
    ctx.body = "test pour le body qui est :" + JSON.stringify(body);
});
   
module.exports = router;
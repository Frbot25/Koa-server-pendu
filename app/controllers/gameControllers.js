const data = require("../../public/js/data");

const gameControllers = {
    hangMann:async function(ctx) {
        try {
            await ctx.render('game');
        } catch(error) {
            console.log(error);
        }
    }
}
module.exports = gameControllers;
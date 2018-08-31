const env = require('../.env'),
    Telegraf = require('telegraf'),
    bot = new Telegraf(env.token);

bot.start(ctx => {
    const from = ctx.update.message.from;        

    console.log(from);

    if(from.id == 345397012) {
        ctx.reply(`Ao seu dispor mestre`);
    } else {
        ctx.reply(`Desculpe, mas só falo com meu mestre`);
    }    
});

bot.startPolling();
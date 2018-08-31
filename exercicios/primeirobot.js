const env = require('../.env'),
    Telegraf = require('telegraf'),
    bot = new Telegraf(env.token);

bot.start(ctx => {
    const from = ctx.update.message.from;
    ctx.reply(`Sai fora ${from.first_name}, sou casado com a Rafaela, `);
});

bot.on('text', async (ctx, next) => {
    await ctx.reply('primeiro middleware')
    next();
})

bot.on('text', async (ctx, next) => {
    await ctx.reply('segundo middleware')    
})

bot.startPolling()
const env = require('../env'),
    Telegraf = require('telegraf'),
    bot = new Telegraf(env.token);

bot.start(async ctx =>{
    await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name} 😆!`);
    
    await ctx.replyWithHTML(`Destacando mensagem<b>HTML</b>
    <i>de várias</i> <code>formas</code> <pre>possíveis</pre>
    <a href="http://google.com.br">Google</a>`);

    await ctx.replyWithMarkdown('Destacando mensagem *markdown*'
        + '_de várias_ `formas` ```possíveis```'
        + '[Google](http://www.google.com.br)');

    //await ctx.replyWithPhoto({source: `${__dirname}/cat.jpeg`});
    await ctx.replyWithPhoto('http://files.cod3r.com.br/cursos-bot/gato1.jpg', {caption: 'Olha o estilo'});
    await ctx.replyWithPhoto({url:'http://files.cod3r.com.br/cursos-bot/gato1.jpg'});
    await ctx.replyWithLocation(29.9773008, 31.1303068);
    await ctx.replyWithVideo('http://files.cod3r.com.br/corso-bot/cod3r-end.m4v');
})

bot.startPolling();
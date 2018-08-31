const env = require('../env'),
    Telegraf = require('telegraf'),
    axios = require('axios'),
    bot = new Telegraf(env.token);

bot.on('voice', async ctx =>{
    const id = ctx.update.message.voice.file_id,
        res = await axios.get(`${env.apiFileUrl}/getFile?file_id=${id}`);

    ctx.replyWithVoice({url:`${env.apiFileUrl}/${res.data.result.file_path}`});    
});

bot.on('photo', async ctx =>{
    const id = ctx.update.message.photo[0].id,
        res = await axios.get(`${env.apiFileUrl}/getFile?file_id=${id}`);
    
    ctx.replyWithPhoto({url:`${env.apiFuleUrl}/${res.data.result.file_path}`});
});

bot.startPolling();
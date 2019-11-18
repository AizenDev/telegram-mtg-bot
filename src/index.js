const Telegraf = require('telegraf')
const mtg = require('mtgsdk')
require('dotenv').config()


const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply('Welcome!'))



bot.on('text', (ctx) => {
  let query = ctx.update.message.text;
  mtg.card.where({name: query}).then((card) => {
    card.map((item) => {
      return ctx.replyWithPhoto(item.imageUrl)        
    }) 
  }).catch((err) => {
    return ctx.reply(`Card not found`);
  })
})
   

bot.launch()        
                


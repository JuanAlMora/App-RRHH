const { Telegraf } = require('telegraf');

// Initialize and configure your Telegram bot
const botToken = '6061894467:AAGvqFw_IJhZEy_lYQDAU-08K4ujw_x26Dc';
const bot = new Telegraf(botToken);

// Handle incoming messages
bot.start((ctx) => {
    ctx.replyWithMarkdown('🤖*Bienvenido a RRHH BOT*🤖\nEstoy dispuesto ayudarte si tienes dudas sobre la applicación.\n\nPara instrucciones sobre un modulo ingresa el comando correspondiente:\n\n🔹Candidatos: /candidatos \n🔹Empleados: /empleados\n🔹Seguridad social: /afiliaciones\n🔹Nómina: /nomina\n🔹Planilla de aportes: /planilla\n🔹Certificaciones: /certificaciones\n❓Ingresa el comando /help para volver a ver este mensaje');
});

bot.help((ctx) => {
    ctx.replyWithMarkdown('🤖*Bienvenido a RRHH BOT*🤖\nEstoy dispuesto ayudarte si tienes dudas sobre la applicación.\n\nPara instrucciones sobre un modulo ingresa el comando correspondiente:\n\n🔹Candidatos: /candidatos \n🔹Empleados: /empleados\n🔹Seguridad social: /afiliaciones\n🔹Nómina: /nomina\n🔹Planilla de aportes: /planilla\n🔹Certificaciones: /certificaciones\n\n❓Ingresa el comando /help para volver a ver este mensaje');
});
bot.on('text', (ctx) => {
  // Process the received message
  ctx.reply('Hola bebesote')
  console.log('Received message:', ctx.message.text);
  // You can perform any necessary actions based on the received message
});

module.exports = bot;
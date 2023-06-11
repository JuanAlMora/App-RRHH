const { Telegraf } = require('telegraf');

// Inicilaizar bot
const botToken = '6061894467:AAGvqFw_IJhZEy_lYQDAU-08K4ujw_x26Dc';
const bot = new Telegraf(botToken);

//Comando /start
bot.start((ctx) => {
    ctx.replyWithMarkdown('🤖*Bienvenido a RRHH BOT*🤖\nEstoy dispuesto ayudarte si tienes dudas sobre la applicación.\n\nPara instrucciones sobre un modulo ingresa el comando correspondiente:\n\n🔹Candidatos: /candidatos \n🔹Empleados: /empleados\n🔹Seguridad social: /afiliaciones\n🔹Nómina: /nomina\n🔹Planilla de aportes: /planilla\n🔹Certificaciones: /certificaciones\n❓Ingresa el comando /help para volver a ver este mensaje');
});

//Comando /help
bot.help((ctx) => {
    ctx.replyWithMarkdown('🤖*Bienvenido a RRHH BOT*🤖\nEstoy dispuesto ayudarte si tienes dudas sobre la applicación.\n\nPara instrucciones sobre un modulo ingresa el comando correspondiente:\n\n🔹Candidatos: /candidatos \n🔹Empleados: /empleados\n🔹Seguridad social: /afiliaciones\n🔹Nómina: /nomina\n🔹Planilla de aportes: /planilla\n🔹Certificaciones: /certificaciones\n\n❓Ingresa el comando /help para volver a ver este mensaje');
});

//Mostrar mensaje de saludo
bot.hears(
  ['hola', 'Hola', 'Buenos dias', 'Holaa', 'holaa', 'buen dia'],
  (ctx) => {
    const userName = ctx.message.from.first_name; // Get the user's first name
    ctx.reply(
    `Hola, ${userName}! Estoy dispuesto a ayudarte en lo que necesites. Utiliza el comando /help para ver las instrucciones.`
    );
  }
);



//comandos para el modulo de candidatos


//menú candidatos
bot.command('candidatos', (ctx) => {
  ctx.replyWithMarkdown('🤖*Bienvenido al modulo de candidatos*🤖\n\nPara instrucciones sobre un proceso ingresa el comando correspondiente:\n\n🔹Hojas de vida: /hojas \n🔹Manejo de Vacantes: /vacantes\n🔹Pruebas Psicotécnicas: /pruebas\n🔹Consultar antecedentes: /antecendentes\n🔹Cargar examenes medicos: /examenes\n🔹Contratación: /contratos\n\n❓Ingresa el comando /candidatos para volver a ver este mensaje');
});


//hojas de vida
bot.command('hojas', (ctx) => {
  ctx.replyWithMarkdown('🤖*Bienvenido al modulo hojas de vida*🤖\n\nPara instrucciones sobre un proceso ingresa el comando correspondiente:\n\n🔹Crear hoja de vida: /crearH \n🔹Consultar hoja de vida: /consultarH\n🔹Actualizar hoja de vida: /actualizarH\n🔹Eliminar hoja de vida: /eliminarH\n\n❓Ingresa el comando /hojas para volver a ver este mensaje');
});

bot.command('crearH', (ctx) => {
  ctx.replyWithMarkdown('🤖*Creación de hojas de vida*🤖\n\nPara crear una hoja de vida haz click en el botón "Agregar Candidato" de la parte superior derecha de tu pantalla dentro del modulo de hojas de vida y a continuación ingresa la información solicitada, ahora tu nueva hoja de vida deberá aparecer en la lista.');
});
bot.command('consultarH', (ctx) => {});
bot.command('actualizarH', (ctx) => {});
bot.command('eliminarH', (ctx) => {});

//vacantes
bot.command('vacantes', (ctx) => {
  ctx.replyWithMarkdown('🤖*Manejo de vacantes*🤖\n\nPara agregar una vacante haz click en el botón con el + de la parte superior izquierda de tu pantalla dentro del modulo de vacantes y a continuación ingresa la información solicitada, ahora tu nueva vacante deberá aparecer en la lista y podrá ser asignada a un nuevo contrato.');
});

//pruebas psicotécnicas
bot.command('pruebas', (ctx) => {
  ctx.replyWithMarkdown('*Bienvenido al modulo de pruebas psicotécnicas*🤖\n\nEste modulo aún no está hecho, así que no sé como funciona 🚫');
});




















//Respuesta a cualquier texto diferente y emojis.
bot.on('message', (ctx) => {
  const messageText = ctx.message.text;
  
  // Check if the message consists solely of an emoji
  if (isEmoji(messageText)) {
    ctx.reply('🤖');
  } else {
    ctx.reply(' No entiendo los que dices, recuerda utilizar el comando /help para ver las instrucciones')
    console.log('Received message:', ctx.message.text);
  }
});

//Verificar si esmoji
function isEmoji(text) {
  const emojiRegex = /^[\uD83C-\uDBFF\uDC00-\uDFFF]+$/;
  return emojiRegex.test(text);
}



module.exports = bot;
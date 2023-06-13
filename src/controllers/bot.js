const { Telegraf } = require('telegraf');

// Inicilaizar bot
const botToken = '6061894467:AAGvqFw_IJhZEy_lYQDAU-08K4ujw_x26Dc';
const bot = new Telegraf(botToken);

//Comando /start
bot.start((ctx) => {
    const userName = ctx.message.from.first_name;
    ctx.replyWithMarkdown(`🤖*Bienvenido a RRHH BOT, ${userName}*🤖\nEstoy dispuesto ayudarte si tienes dudas sobre la applicación.\n\nPara instrucciones sobre un modulo ingresa el comando correspondiente:\n\n🔹Candidatos: /candidatos \n🔹Empleados: /empleados\n🔹Seguridad social: /afiliaciones\n🔹Nómina: /nomina\n🔹Planilla de aportes: /planilla\n🔹Certificaciones: /certificaciones\n❓Ingresa el comando /help para volver a ver este mensaje`);
});

//Comando /help
bot.help((ctx) => {
  const userName = ctx.message.from.first_name;
  ctx.replyWithMarkdown(`🤖*Bienvenido a RRHH BOT, ${userName}*🤖\nEstoy dispuesto ayudarte si tienes dudas sobre la applicación.\n\nPara instrucciones sobre un modulo ingresa el comando correspondiente:\n\n🔹Candidatos: /candidatos \n🔹Empleados: /empleados\n🔹Seguridad social: /afiliaciones\n🔹Nómina: /nomina\n🔹Planilla de aportes: /planilla\n🔹Certificaciones: /certificaciones\n❓Ingresa el comando /help para volver a ver este mensaje`);
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
bot.command('consultarH', (ctx) => {
  ctx.replyWithMarkdown('🤖*Consulta de hojas de vida*🤖\n\nPara consultar una hoja de vida haz click en el botón con el ojo de la parte derecha de la lista de candidatos, ahora deberían mostrarse toda la información registrada.');
});
bot.command('actualizarH', (ctx) => {
  ctx.replyWithMarkdown('🤖*Actualización de hojas de vida*🤖\n\nPara actualizar una hoja de vida haz click en el botón con el lápiz de la parte derecha de la lista de candidatos o enditar candidato desde la vista de detalles, ahora deberían mostrarse toda la información registrada y podrás modificarla.');
});
bot.command('eliminarH', (ctx) => {
  ctx.replyWithMarkdown('🤖*Eliminación de hojas de vida*🤖\n\nPara eliminar una hoja de vida haz click en el botón con basurero de la parte derecha de la lista de candidatos, ahora debería desaparecer de la lista.');
});

//vacantes
bot.command('vacantes', (ctx) => {
  ctx.replyWithMarkdown('🤖*Manejo de vacantes*🤖\n\nPara agregar una vacante haz click en el botón con el + de la parte superior izquierda de tu pantalla dentro del modulo de vacantes y a continuación ingresa la información solicitada, ahora tu nueva vacante deberá aparecer en la lista y podrá ser asignada a un nuevo contrato.');
});

//pruebas psicotécnicas
bot.command('pruebas', (ctx) => {
  ctx.replyWithMarkdown('*Bienvenido al modulo de pruebas psicotécnicas*🤖\n\nEste modulo aún no está hecho, así que no sé como funciona 🚫');
});

//Consulta de antecedentes
bot.command('antecedentes', (ctx) => {
  ctx.replyWithMarkdown('🤖*Consulta de antecedentes*🤖\n\nPara consultar los antecedentes penales de un candidato da click en el botón de antecedentes desde el menú de candidatos, a continuación serás redirigido a la página de la policía donde debes seguir las instrucciones que allá se indican');
});

//Examanes
bot.command('examenes', (ctx) => {
  ctx.replyWithMarkdown('🤖*Carga de examanes médicos*🤖\n\nEste módulo aún no está hecho, así que no sé como funciona 🚫')
});

//Contratación
bot.command('contratos' , (ctx) => {
  ctx.replyWithMarkdown('🤖*Modulo de contratación*🤖\n\nPara contratar un candidato da click en el botón ✅')
});

//menú Empleados
bot.command('empleados',(ctx)=>{
  ctx.replyWithMarkdown('🤖*Bienvenido al modulo de Empleados*🤖\n\nPara instrucciones sobre un proceso ingresa el comando correspondiente:\n\n🔹Hojas de vida: /hojas\n🔹Contratación: /contratos\n\n❓Ingresa el comando /empleados para volver a ver este mensaje')
});

//menú seguridad social
bot.command('afiliaciones',(ctx)=>{
  ctx.replyWithMarkdown('🤖*Bienvenido al modulo de Seguridad Social*🤖\n\nPara instrucciones sobre un proceso ingresa el comando correspondiente:\n\n🔹Afiliar a ARl: /arl\n🔹Afiliar a caja de compensación: /caja\n\n❓Ingresa el comando /afiliaciones para volver a ver este mensaje')
});

//arl
bot.command('arl',(ctx)=>{
  ctx.replyWithMarkdown('🤖*Afiliación a ARL*🤖\n\nPara afiliar a un empleado a una ARL haz click en el botón ARL y serás redirigido a la página ofical de ARL SURA donde seguirás con el proceso')
});

//caja de compensación
bot.command('caja',(ctx)=>{
  ctx.replyWithMarkdown('🤖*Afiliación a caja de compensación*🤖\n\nPara afiliar a un empleado a una caja de compensación haz click en el botón caja de compensación y serás redirigido a la página ofical de Compensar donde seguirás con el proceso')
});

//planilla de aportes
bot.command('planilla',(ctx)=>{
  ctx.replyWithMarkdown('🤖*Planilla de aportes*🤖\n\nPara acceder a la planilla de aportes da click en el botón de planilla de aportes en el menú principal y serás redirigido a la pagina aportesenlinea.com dode seguirás con el proceso')
});

//Nomina
bot.command('nomina',(ctx)=>{
  ctx.replyWithMarkdown('🤖*Modulo de Nomina*🤖\n\nPara instrucciones sobre un proceso ingresa el comando correspondiente:\n\n🔹Generar desprendible: /desprendible\n🔹Editar Nomina: /editarN\n\n❓Ingresa el comando /nomina para volver a ver este mensaje')
});

bot.command('editarN',(ctx)=>{
  ctx.replyWithMarkdown('🤖*Editar Nomina*🤖\n\nPara editar la nomina haz click en el botón del lapiz en la lista de nómina y rellena la información solicitada, ahora deberías ver la información actualizada en la lista de nómina.')
});

bot.command('desprendible',(ctx)=>{
  ctx.replyWithMarkdown('🤖*Generar desprendible*🤖\n\nPara generar un desprendible de nómina haz click en el botón generar desprendible, este se descargará automaticamente')
});

//certificaciones
bot.command('certificaciones',(ctx)=>{
  ctx.replyWithMarkdown('🤖*Modulo de Certificaciones*🤖\n\nPara generar un certificado de empleo, ingresa la información del empleado solicitada y da click a descargar, el certificado se descargará automaticamente en tu computador.')
});



//Respuesta a stickers
bot.on('sticker', (ctx) => {
  
  
  // Code to handle the received sticker
  ctx.reply('Bonito sticker!, recuerda ingresar /help para ver las instrucciones');
});


//Respuesta a cualquier texto diferente y emojis.
bot.on('message', (ctx) => {
  const messageText = ctx.message.text;

  // Check if the message consists solely of an emoji
  if (isEmoji(messageText)) {
    ctx.reply('🤖');
  } else {
    ctx.reply(' No entiendo los que dices, recuerda utilizar el comando /help para ver las instrucciones o comprueba si escribiste el comando de forma correcta')
    console.log('Received message:', ctx.message.text);
  }
});

//Verificar si esmoji
function isEmoji(text) {
  const emojiRegex = /^[\uD83C-\uDBFF\uDC00-\uDFFF]+$/;
  return emojiRegex.test(text);
}



module.exports = bot;
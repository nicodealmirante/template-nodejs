const { createBot, createProvider, createFlow, addKeyword, EVENTS, addAnswer } = require('@bot-whatsapp/bot')
const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const JsonFileAdapter = require('@bot-whatsapp/database/json')
const { readFileSync } = require("fs");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

let fecha;
let localidad;
let nombre;
let motivo;  
  

 
const Cliente = addKeyword(["AGENTE","Cliente","Asesor"])

    .addAnswer(
      "Localidad?"
      , {capture:true, delay:5000}, async (ctx,{provider}) => {
  localidad=ctx.body})
        .addAnswer(
          "Continuamos por telefono? En que horario puedo llamar?"
         , {capture:true, delay:5000}, async (ctx ,{flowDynamic,fallBack,provider}) => {
          const refProvider = await provider.getInstance();
const mywhatsa = "5491140054474@s.whatsapp.net";
refProvider.sendMessage(mywhatsa, {text:
           `*${motivo}*
         Numero: +${ctx.from}
         Nombre: *${nombre}*
         Fecha: *${fecha}*
         Localidad= *${localidad}* 
         "https://selfiemirror.com.ar/traslado.php?loca=${localidad}&prov=buenos+aires&submit=Enviar"
         
             INFO: \n*${ctx.body}*`}) 
             
    // say hello to everyone on the group
   })
         .addAnswer("Buenisimo, A la brevedad me estare comunicando con usted. Tambien puede enviarme a mi numero personal 11-4005-4474. Muchisimas Gracias. Quedo a sus ordenes"
         , {capture:true, delay:5000}, async (ctx ,{gotoFlow,fallBack,provider}) => {
          const refProvider = await provider.getInstance();
          const mywhatsa = "5491140054474@s.whatsapp.net";
          refProvider.sendMessage(mywhatsa, {text:
          `SIG MSJ
          Numero: +${ctx.from}
          INFO: 
          *${ctx.body}*`}) 
    // say hello to everyone on the group   
     if(ctx.body == "SM" ||ctx.body == "Sm" || ctx.body == "sm"){
     
      gotoFlow(flowPrincipal)}else{
console.log("Ejecuto return close")

      return fallBack("Gracias por comunicarse con nosotros. Escriba *SM* para volver al menu inicial")
  } }) 

const audiono = addKeyword(EVENTS.VOICE_NOTE)
.addAnswer('Disculpe, no puedo escuchar audios. Por favor utilice solo texto.')


const flowsAlquiler = addKeyword(['alquiler', 'alquilar', 'cumple','servicios'])

.addAnswer("Cual es la fecha del  evento?" , {capture:true, delay:5000}, async (ctx,{provider}) => {

fecha=ctx.body

})
.addAnswer('👌Te envio la info de alquiler.',{delay:7000})
  
    .addAnswer('Selfie Mirror',{
      media: 'banner22.jpg', delay: 6000} )
.addAnswer([
'*Espejo Magico Selfie Mirror*',
'\nDiseño elegante: Nuestro espejo mágico tiene un diseño moderno y elegante que se adapta a cualquier tipo de evento.',
'Su apariencia sofisticada agrega un toque especial al ambiente.',
'\nAccesorios y decoración: Contamos con una variedad de accesorios y elementos decorativos para personalizar aún ',
'más la experiencia. Puedes elegir entre diferentes marcos, sombreros, anteojos, pizarras con mensajes divertidos' ,
'y más. Estos elementos permiten que los invitados se diviertan y creen fotos únicas.',
'\nTamaño y portabilidad: El espejo mágico tiene dimensiones compactas que facilitan su transporte e instalación en ',
'diferentes espacios. Es lo suficientemente versátil como para adaptarse a salones de eventos, fiestas en exteriores ',
'y otros lugares.',
'\nOpciones de software: Nuestro espejo mágico viene con un software propio que ofrece una amplia gama de funciones ',
'y personalización. Puedes elegir entre diferentes plantillas de diseño, agregar efectos especiales a las fotos y configurar ',
'opciones de impresión según tus preferencias.',
'\nTiempo de alquiler: El tiempo de alquiler del espejo mágico es flexible y se adapta a las necesidades de tu evento.',
' Puedes contratarlo por horas o por el tiempo que consideres necesario para brindar una experiencia completa a tus invitados.',
'\nRecuerda que nuestros servicios incluyen el montaje, desmontaje y la asistencia de personal capacitado durante todo' ,
'el evento. Estamos comprometidos en asegurar que tus invitados disfruten al máximo de la experiencia con el espejo mágico.',
'Valor Servicio por 2 Horas $ 50.000 (base)',
'El valor de la Hora adicional es de $ 25.000'],{delay: 10000})
.addAnswer('Espejo Magico Selfie Mirror',{
media: 'banner3.jpg',delay:10000}) 
.addAnswer([
'*360 Super Slow.*',
'\nEl servicio dura 2 horas. Durante ese tiempo no existe limite de caputras.',
'Los videos son filmados y compartidos en el momento ya editados automaticamente',
'Incluye accesorios (pelucas, pistola lanza burbujas, cotillon)',
'El valor del servico de 2 horas es de $ 50.000', 
'El valor de la Hora adicional es de $ 25.000'],{delay:5000}
)
.addAnswer('Plataforma 360 Super Slow',{
media: 'banner.jpg', }) 
.addAnswer([
 '🔒Los valores se congelan y la fecha se reseva solo al señar el servicio', 
 '🚚El valor no incluye traslados',
 '🚩*Servicio disponible para todo el pais.* Contamos con representantes en todas las provincias'])
 .addAction(async (ctx,{provider,gotoFlow}) =>{
  const jid = ctx.key.remoteJid 
 await provider.getInstance().sendMessage(jid,{video: readFileSync("video.mp4"),
                  caption: "Showroom",
                gifPlayback: true
    })     
  
    await provider.getInstance().sendMessage(jid,{video: readFileSync("video2.mp4"),
   caption: "Selfie Mirror",
  gifPlayback: true
  })



await gotoFlow(Cliente)
  })

      

    
const flowVenta = addKeyword(['venta', 'vender', 'comprar', 'compra'])
.addAnswer(
'👌 Te envio la info de Venta.')
.addAnswer(['*Espejo Magico Selfie Mirror*',
'\nEl Espejo Mágico de Selfie Mirror cuenta con una cámara web de alta calidad, vidrio templado resistente, una Mini PC y un',
'televisor LED de 32 pulgadas. Estas características garantizan una experiencia de alta definición para capturar momentos',
' especiales.',
'\nSu diseño compacto y portátil, con dimensiones de 126 cm de alto x 70 cm de ancho y 20 cm de profundidad en el modelo',
' Slim, permite transportarlo fácilmente en cualquier vehículo. Esto brinda una gran versatilidad y conveniencia para eventos ',
 'y fiestas.'])
 .addAnswer('Plataforma 360 Super Slow',{
  media: 'banner.jpg', delay:5000 }) 
  .addAnswer(['La facilidad de uso es una de las ventajas clave del Espejo Mágico. Simplemente tienes que enchufarlo y presionar el ',
'botón de encendido para que empiece a funcionar. Esto agiliza la instalación y permite que los eventos comiencen rápidamente.',
'\nEs importante mencionar que el Selfie Mirror no incluye una impresora, pero está preparado para funcionar con cualquier ',
'impresora que se adapte a las necesidades del cliente. Esto brinda flexibilidad para elegir la impresora que mejor se ajuste a', 
'los requerimientos de impresión.',
'\nEn cuanto al precio, el valor del equipo es de 1500 dólares o pesos al valor del dólar blue del día de la seña. Esto ',
'puede ser una ventaja para los clientes que deseen aprovechar las condiciones del mercado al momento de adquirir el Espejo',
 'Mágico.'])
.addAnswer('Equipo Slim Selfie Mirror',{
media: 'banner4.jpg', delay:5000})
.addAnswer(['*Plataforma 360 Super Slow*',
 '\nLa plataforma incluye motor, control remoto, variador de velocidad, soporte para celular o Gopro y Aro de Led',
  'El Valor en 70 o 90 cm es de $170.000',
 'El valor en 110 cm es de $200.000'])
  
  .addAnswer('Selfie Mirror',{
  media: 'banner22.jpg', delay:5000})
.addAnswer(
 '✈️*Enviamos a todo el Pais.*')
 .addAnswer('Espejo Magico', {
media: 'banner3.jpg'})
.addAction(async (ctx,{provider,gotoFlow}) =>{
  const jid = ctx.key.remoteJid
  fecha="Es venta"
  await provider.getInstance().sendMessage(jid,{video: readFileSync("video2.mp4"),
 caption: "Selfie Mirror",
gifPlayback: true
})
  
await provider.getInstance().sendMessage(jid,{video: readFileSync("video.mp4"),
                  caption: "Showroom",
                gifPlayback: true
              })
              await provider.getInstance().sendMessage(jid,{video: readFileSync("video3.mp4"),
              caption: "Slim",
            gifPlayback: true
          })


        await delay(9000);
        gotoFlow(Cliente)

  })



  
const flowPrincipal = addKeyword(EVENTS.WELCOME)

  .addAnswer("Hola, Mi nombre es Nicolas de Selfie Mirror, espero poder asesorarle en todo lo que necesite.",{capture:false}, async (ctx,{provider}) => {

  const sock = await provider.getInstance();
  const msgPoll = {
    sticker: {
      url:
      "sticker.webp"
    }
  }
sock.sendMessage(ctx.key.remoteJid, msgPoll)


})  

  .addAnswer("Su nombre?", {capture:true, delay:5000}, async (ctx,{provider}) => {
   nombre=ctx.body

 })
      .addAnswer(['Te agradezco por comunicarte con *Selfie Mirror*','Si su consulta es por informacion de nuestros servicios solo escriba la palabra: *Alquiler* o *Venta* y obtendra la informacion inmediatamente.','Si usted es cliente escriba la palabra *Cliente*'],{capture: true, delay:5000},
  async (ctx, {fallBack}) =>{
    motivo=ctx.body;
        switch (ctx.body) { 
  case 'Alquiler':
    flowsAlquiler
    break;
    case 'alquiler':
      flowsAlquiler
                break;
          case 'venta':
            flowVenta
            break;
  case 'Venta':
    flowVenta
    break;
    case 'Cliente':
      Cliente
      break;
      case 'cliente':
        Cliente
              break;
  default:
  return fallBack({body: 'Por favor solo escriba la palabra. *Alquiler*, *Venta* o *Cliente* en caso de ya formar parte de Selfie Mirror'})
  }},
[flowVenta, flowsAlquiler,Cliente])


const main = async () => {
    const adapterDB = new JsonFileAdapter()
    const adapterFlow = createFlow([flowPrincipal,flowVenta,flowsAlquiler,Cliente, audiono])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
    
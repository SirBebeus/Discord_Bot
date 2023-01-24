const fs = require('fs');
module.exports = {
	name: 'irritado',
	description: 'Toca audio irritado',
	async execute(cliente,msg, args) {
        if(!msg.member.voice.channel){
            msg.reply("você tem que ta num canal de voz seu burro");
        }else{
            try{
                const entrada = await msg.member.voice.channel.join();
                const conteudo = entrada.play(fs.createReadStream('sons/IrittarAdm.ogg'), { type: 'ogg/opus' },{ highWaterMark: 50 }, {volume:false});
                conteudo.on("finish", ()=>{entrada.disconnect()}); 
            }catch(e){
                console.log(e);
            }
        }
	},
};
module.exports = {
	name: 'pause',
	description: 'Pausa a música',
	execute, 
};
function execute(cliente,msg, args) {
	if(!msg.member.voice.channel){
        return msg.reply("você tem que ta num canal de voz seu burro");
    }
    let queue = cliente.disturbe.getQueue(msg);
    if(!queue)
        return msg.reply("ainda não foi criada fila nenhuma animal");
    if(cliente.disturbe.isPaused(msg)){
        return msg.channel.send("Música já ta pausada meu filho");
    }
    cliente.disturbe.pause(msg);
}

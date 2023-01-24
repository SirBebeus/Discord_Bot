module.exports = {
	name: 'resume',
	description: 'Despausa a música',
	execute, 
};
function execute(cliente,msg, args) {
	if(!msg.member.voice.channel){
        return msg.reply("você tem que ta num canal de voz seu burro");
    }
    let queue = cliente.disturbe.getQueue(msg);
    if(!queue)
        return msg.reply("ainda não foi criada fila nenhuma");
    if(cliente.disturbe.isPaused(msg)){
        cliente.disturbe.resume(msg);
    }
    else{
        return msg.channel.send("Música já ta tocando seu surdo");
    }
    
}

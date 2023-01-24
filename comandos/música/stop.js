module.exports = {
	name: 'stop',
	description: 'Para a música e limpa a fila',
	execute, 
};
function execute(cliente,msg, args) {
	if(!msg.member.voice.channel){
        return msg.reply("você tem que ta num canal de voz seu burro");
    }
	let queue = cliente.disturbe.getQueue(msg);
    if(!queue)
        return msg.reply("ainda não foi criada fila nenhuma");
    cliente.disturbe.stop(msg);
}

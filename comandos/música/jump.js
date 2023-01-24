module.exports = {
	name: 'jump',
	description: 'Pula para uma determinada música da fila',
	execute, 
};
function execute(cliente,msg, args) {
	if(!msg.member.voice.channel){
        return msg.reply("você tem que ta num canal de voz seu burro");
    }
    let queue = cliente.disturbe.getQueue(msg);
    if(!queue)
        return msg.reply("ainda não foi criada fila nenhuma seu animal");
    try{
        const saida = parseInt(args[0]) - 1;
        cliente.disturbe.jump(msg, saida);
    }
    catch(err){
        console.log(err);
        msg.channel.send("Número invalido.");
    } 
        
    
}
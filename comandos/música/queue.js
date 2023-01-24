 module.exports = {
	name: 'queue',
	description: 'Mostra a fila',
	execute, 
};
 
function execute(cliente,msg, args) {
    let queue = cliente.disturbe.getQueue(msg);
    if(!queue)
        return msg.reply("ainda não foi criada fila nenhuma seu animal");
    if(!msg.member.voice.channel){
        return msg.reply("você tem que ta num canal de voz seu burro");
    }
    msg.channel.send(
        {
            embed:{
                title: 'Fila Atual (mostro só os 10 primeiros itens)',
                color: '#006699',
                description: queue.songs.map((song, id, playList) =>
                `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(0, 10).join("\n\n"),
            }
        });
}
 
 
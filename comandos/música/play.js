module.exports = {
	name: 'play',
	description: 'Toca música',
	execute, 
};


function execute(cliente,msg, args) {
	if(!msg.member.voice.channel){
        return msg.reply("você tem que ta num canal de voz seu burro");
    }
    const musica = args.join(" ");
	if(!musica) return msg.reply("escreve alguma coisa carai 🤬");
	cliente.disturbe.play(msg, musica);
    
}

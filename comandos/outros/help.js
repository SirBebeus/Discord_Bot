module.exports = {
	name: 'help',
	execute, 
};

function execute(cliente,msg, args) {
	let string = "⠀⠀⠀⠀⠀⠀⠀⠀⠀\n===== AJUDA =====\n";
    cliente.BibliotecaComandos.forEach(nomeComando => {
        if(nomeComando.description)
            string += `**-${nomeComando.name}**: ${nomeComando.description}\n`;
    });
    string += "**Caso exista alguma fila de música, a mesma será apagada se usar os comandos que tocam os audios produzidos pelo grupo**";
    return msg.channel.send(string);
}


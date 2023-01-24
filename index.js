//feito por Matheus Rodrigues Tenaglia
const discord = require('discord.js');
const fs = require('fs');
const Disturbe = require('distube');
const cliente = new discord.Client(); //objeto do discord vulgo bot
cliente.BibliotecaComandos = new discord.Collection();
const {prefixo,token} = require('./config.json');
const { error } = require('console');
const { type } = require('os');
cliente.disturbe = new Disturbe(cliente, { searchSongs: false, emitNewSongOnly: true, leaveOnFinish: true });


const ComandosPasta = fs.readdirSync('./comandos');
for (const pasta of ComandosPasta){
    const arquivosComandos = fs.readdirSync(`./comandos/${pasta}`).filter(arquivo => arquivo.endsWith('.js'));
    for (const arquivo of arquivosComandos) {
        const comando = require(`./comandos/${pasta}/${arquivo}`);
        cliente.BibliotecaComandos.set(comando.name, comando);
    }

}

cliente.login(token);


cliente.on("ready",() =>{
    console.log('Pai ta on');
    const atividades = [
        `A Diversão da Noite`,
        `os nerds`,
        `o ADM fazendo merda`,
        `a plebe`,
    ];
    let index = 0;
    setInterval(()=>{
        if(index===atividades.length) index = 0;
        const status = atividades[index];
        cliente.user.setActivity(status, {
            type: "WATCHING"
        }).catch(console.error)
        index++;
    }, 1000 * 60 )
});


cliente.on('disconnect', () => {
    console.log('Disconnect!');
});

cliente.on('error', error => {
    console.log(error);
});



cliente.on("message", async (msg) =>{
    if (!msg.guild) return; //bot nao vai ler chat privado guilda=servidor
    if(msg.author.bot) return;
    if(msg.content === '?') return msg.channel.send("?");
    if(!msg.content.startsWith(prefixo)) return; //bot so vai ler comandos com - 
    const args = msg.content.slice(prefixo.length).trim().split(/ +/);// corte o prefixo inteiramente, remova os espaços em branco restantes e, em seguida, divida-o em uma matriz por espaços.
	const nomeComando = args.shift().toLowerCase();//pega o comando
    if (!cliente.BibliotecaComandos.has(nomeComando)) return; //se nao existe esse comando na biblioteca da return
    try {
		cliente.BibliotecaComandos.get(nomeComando).execute(cliente,msg,args);
	} catch (error) {
		console.error(error);
		msg.reply('Ocorreu um erro ao tentar executar esse comando!');
	}
});
//-----------------------------------DISTURBE FRASES--------------------------------------------------------------------------------------//
cliente.disturbe
    .on("initQueue", queue => {
    queue.autoplay = false;
    queue.volume = 100;
    })
    .on("playSong", (message, queue, song) => {
    message.channel.send(
        {
            embed:{
                author: {
                    name: 'Vou tocar essa merda aqui',
                },
                color: '#006699',
                title: `${song.name}`,
                url: song.url, 
                color: '#006699',
                description: `\nPedido pelo arrombado do: ${song.user}`,
            }
        }
    )})
    .on("addSong", (message, queue, song) => message.channel.send(
        {
            embed:{
                author: {
                    name: 'Adicionado na fila essa merda aqui',
                },
                title: `${song.name}`,
                color: '#006699',
                url: song.url,
                description: `\nPedido pelo arrombado do: ${song.user}`,

            }
        }
    ))
    .on("playList", (message, queue, playlist, song) => message.channel.send(
        {
            embed:{ 
                author: {
                    name: `Vou tocar essa playlist merda aqui` ,
                },
                title:`${playlist.name}`,
                url:playlist.url,
                color: '#006699',
                description: ` Playlist de (${playlist.songs.length} músicas).\nPedido pelo corno do: ${song.user}\nTocando agora: \`${song.name}\` - \`${song.formattedDuration}\``
            }
        }
    )).on("addList", (message, queue, playlist) => message.channel.send({
        embed:{
            author: {
                name: 'Adicionado na fila essa merda de playlist',
            },
            title: `${playlist.name}`,
            url:playlist.url,
            color: '#006699',
            description: `Playlist de (${playlist.songs.length} músicas) `, 
        }
    }
    )).on("empty", message => message.channel.send("Canal vazio. Saindo do canal seus podres"))
    .on("finish", message => message.channel.send("Não tem mais música na fila seu merdinha, vou sair 👍"))
    .on("error", (message, e) => {
        console.error(e)
        message.channel.send("Bugo aqui mano, acho que você fez alguma merda ");
    });
   

   
   

 
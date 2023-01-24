module.exports = {
	name: 'adm',
    description: 'Mostra a grandiosidade do adm',
	execute, 
};
function execute(cliente,msg, args) {
	var list = [
        'https://cdn.discordapp.com/attachments/669006752259506177/841389014594617385/macaco.jpeg',
        'https://media.discordapp.net/attachments/669006752259506177/834140559861219368/PicsArt_04-20-03.56.32.jpg?width=269&height=375',
        'https://cdn.discordapp.com/attachments/669006752259506177/837826484265680936/MEME1.png',
        'https://i.pinimg.com/474x/98/af/ec/98afecb9c5049ca695aed55c398b7ffe.jpg',
        'https://c.tenor.com/690jBcTy_1MAAAAM/adm-kilbin.gif',
        'https://c.tenor.com/ohhXLh9oys4AAAAd/forever-jojo.gif',
        'https://media.tenor.com/images/083fa722f64ce784fa084673512f4d05/tenor.gif',
        'https://media.tenor.com/images/850f9afcd4220bff6fd68cfe9e19e642/tenor.gif',
        '',
        'https://cdn.discordapp.com/attachments/879333015237558303/895473078992257054/IMG-20210829-WA0021.jpg'
    ]
    try{
        var rand = list[Math.floor(Math.random() * list.length)];
        msg.channel.send( {
            embed:{
                title: 'Quem é o ADM Izuca?',
                color: '#006699',
                description: `Caro ${msg.author.username}, aqui está um exemplo de quem é ADM Izuca 🦧`,
                image: {
                    url: rand
                },
                footer:{
                    text: 'A deidade do grupo, muito piedoso'
                } 
            }
        });
            
            
            
            //`⠀⠀⠀⠀⠀⠀⠀⠀⠀\nCaro ${msg.author.username} aqui está um exemplo de quem é ADM Izuca 🦧:`,
       // {files:[rand]});
    }catch(e){
        console.log(e);
    }
    
}
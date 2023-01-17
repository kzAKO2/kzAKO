const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")

class MessageEmbedUpdate extends Event {
    constructor() {
        super("messageEmbedUpdate")
    }

    async run(bot) {
        let channel = bot.channels.cache.get(bot.config.ids.channels.text.privatrooms)
        if(channel) {
            channel.messages.fetch(bot.config.ids.messages.privatrooms)
            .then(message => {
                let row1 = new MessageActionRow()
                .addComponents(new MessageButton().setEmoji('<:1f9d1200d1f91d200d1f9d1:1064865148088635482> ').setCustomId('pvlimit').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:1f512:1064862659394158652> ').setCustomId('pvlock').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:1f513:1064862654671364096> ').setCustomId('pvunlock').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:274c:1064865141629390929> ').setCustomId('pvremoveuser').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:2714fe0f:1064865145643352114> ').setCustomId('pvadduser').setStyle('SECONDARY'))

                let row2 = new MessageActionRow()
                .addComponents(new MessageButton().setEmoji('<:1f58afe0f:1064863651498041384>').setCustomId('pvname').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:1f5d2fe0f:1064863647572185159>').setCustomId('pvcrown').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:1f6aa:1064863643881193504>').setCustomId('pvkick').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:1f6c7:1064863641872105582> ').setCustomId('pvmute').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:1f3a4:1064863638214676510> ').setCustomId('pvunmute').setStyle('SECONDARY'))
                
                let embed = new MessageEmbed()
                .setColor('#2f3136')
                .setTitle('Управление приватной комнатой')
                .setDescription('> Жми следующие кнопки, чтобы настроить свою комнату')
                .setFooter({text: 'Использовать их можно только когда у тебя есть приватный канал'})
                .addField('** **',
                '<:1f9d1200d1f91d200d1f9d1:1064865148088635482>    — установить лимит' + '\n'
                + '<:1f512:1064862659394158652>  — закрыть комнату' + '\n'
                + '<:1f513:1064862654671364096>  — открыть комнату' + '\n'
                + '<:274c:1064865141629390929>  — забрать доступ' + '\n'
                + '<:2714fe0f:1064865145643352114>   — выдать доступ',
                true)
                .addField('** **',
                '<:1f58afe0f:1064863651498041384>  — сменить название' + '\n'
                + '<:1f5d2fe0f:1064863647572185159>  — передать владельца' + '\n'
                + '<:1f6aa:1064863643881193504> — выгнать из комнаты' + '\n'
                + '<:1f6c7:1064863641872105582>   — забрать право говорить' + '\n'
                + '<:1f3a4:1064863638214676510>  — вернуть право говорить',
                true)
                message.edit({embeds: [embed], components: [row1, row2]})
            }).catch((err) => {
                console.log(`Ошибка с изменерием сообщения.\n${err.name}: ${err.message}`)
            })
        }
    }
}

module.exports = MessageEmbedUpdate
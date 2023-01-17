class Ready extends Event {
    constructor() {
        super("ready")
    }

    async run(bot) {
        console.log(bot.user.tag)

    bot.channels.cache.get('1060337352586838106').send({embeds: [{title: 'Embeds'}]})

        bot.emit('messageEmbedUpdate', bot)
    }
}

module.exports = Ready

// bot.channels.cache.get('вставляем айди канала')
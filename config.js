const { Intents } = require('discord.js')

module.exports.internal = {
    token: 'MTA2NDU5OTIxNTAyMTQ5MDI3Ng.GZk4fr.ktqR6_zwoCAf89DpA02FhFd4hka4UWEbTANabA',
    mongoURL: 'mongodb+srv://privateslpp:A0ruzI6FJdAh5bWX@cluster0.twhzaud.mongodb.net/?retryWrites=true&w=majority'
}

module.exports.intents = [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING
]

module.exports.ids = {
    owner: "409061862223904779",
    messages: {
        privatrooms: '1064853643339255839' // убераем 2
    },
    guilds: {
        main: '936364515547811852'
    },
    channels: {
        text: {
            privatrooms: '1060337352586838106' // убераем 1
        },
        voice: {
            createPrivate: '1060337350875549816'
        },
        categories: {
            privatrooms: '1060256040312127625'
        }
    }
}

module.exports.permissions = {
    privateroom: {
        creator: {
            CREATE_INSTANT_INVITE: true,
            VIEW_CHANNEL: true,
            CONNECT: true,
            SPEAK: true,
            STREAM: true,
            USE_VAD: true,
            PRIORITY_SPEAKER: true,
            MANAGE_CHANNELS: false,
            MANAGE_ROLES: false,
            MANAGE_WEBHOOKS: false,
            MOVE_MEMBERS: false,
        }
    }
}
import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});
client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith('create')){
        const url = message.content.split('create')[1].trim();;
        return message.reply({
            content:'Generating Short ID for' + url,
        });
    };
    message.reply({
        content: "Hi from Bot"
    });
});

client.on('interactionCreate', interaction => {
});

client.login("MTI3NTc1MTQyODIzMjU3NzA1NA.GaZ-SJ._EAiFq8i4yd0m_fINW3d3ZZXRYrf72p8ASLDM8");
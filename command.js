import { REST, Routes } from 'discord.js';
const commands = [{
    name: "create",
    description: "Creates a new short URL"
}]

const rest = new REST({ version: '10'}).setToken("MTI3NTc1MTQyODIzMjU3NzA1NA.GaZ-SJ._EAiFq8i4yd0m_fINW3d3ZZXRYrf72p8ASLDM8");
const rest = new REST
try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands("1275751428232577054"), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
  

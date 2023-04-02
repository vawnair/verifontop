
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription(
			"ping pong xD"
		),

	async execute(interaction) {
        interaction.reply("Pong!");
	},
};
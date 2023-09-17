import {SlashCommandBooleanOption, SlashCommandBuilder} from "@discordjs/builders";
import {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    CacheType,
    ChatInputCommandInteraction,
    MessageActionRowComponentBuilder,
} from "discord.js";
import {CommandType} from ".";
import {BuildButtonId} from "../buttons";
import {randomInt} from "crypto";

const pingCommand: CommandType = {
    data: new SlashCommandBuilder().setName("ping").setDescription("Ping. Pong?"),
    execute: async (intr: ChatInputCommandInteraction<CacheType>) => {
        const secretNumber = randomInt(0, 10);
        const secretNumberButton = new ButtonBuilder()
            .setLabel("Secret Number")
            .setStyle(ButtonStyle.Primary)
            .setCustomId(BuildButtonId("secretNumber", secretNumber));

        const actionRow = new ActionRowBuilder<MessageActionRowComponentBuilder>() //
            .addComponents(secretNumberButton);

        return intr.reply({content: "Pong!", components: [actionRow]});
    },
};

export {pingCommand as command};

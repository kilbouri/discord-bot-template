import {ButtonInteraction} from "discord.js";
import {ButtonType} from ".";

const secretNumberButton: ButtonType = {
    buttonId: "secretNumber",
    execute: async (intr: ButtonInteraction, secretNumber: number) => {
        return await intr.reply(`The secret number is ${secretNumber}`);
    },
};

export {secretNumberButton as button};

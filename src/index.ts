import {LoadCommands} from "./commands";
import {Config} from "./config";
import {logger} from "./logger";
import {Client} from "discord.js";

let client: Client | undefined;

const start = async (): Promise<void> => {
    client = new Client({intents: []});

    await LoadCommands(Config.devMode ? Config.development : Config.production);
};

// graceful exit handler
require("shutdown-handler").on("exit", (event: Event) => {
    event.preventDefault(); // delay process closing

    client?.emit("shutdown");

    logger.info("Graceful shutdown completed. Exiting...");
    process.exit();
});

// start bot
start();

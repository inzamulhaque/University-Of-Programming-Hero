import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
import config from "./app/config";
import seedSuperAdmin from "./app/DB";
const port = process.env.PORT || 7000;

let server: Server;

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${config.dbUser as string}:${
        config.dbPassword as string
      }@cluster0.ehl62mb.mongodb.net/University-Of-Programming-Hero?retryWrites=true&w=majority`,
    );

    seedSuperAdmin();

    server = app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();

process.on("unhandledRejection", () => {
  console.log("unhandledRejection");

  if (server) {
    server.close(() => process.exit(1));
  }

  process.exit(1);
});

process.on("uncaughtException", () => {
  console.log("uncaughtException");

  process.exit(1);
});

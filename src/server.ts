import { Server } from "http";
import app from "./app";

const port = process.env.PORT || 5000;
async function main() {
  try {
    const server: Server = app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

    const exitHandler = () => {
      if (server) {
        server.close(() => {
          console.log("Server closed");
        });
      }
      process.exit(1);
    };
    process.on("uncaughtException", (error) => {
      console.log(error);
      exitHandler();
    });

    process.on("unhandledRejection", (error) => {
      console.log(error);
      exitHandler();
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();

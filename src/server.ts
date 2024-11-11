import { Server } from "http";
import app from "./app";

const port = process.env.PORT || 5000;
async function main() {
  try {
    const server: Server = app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();

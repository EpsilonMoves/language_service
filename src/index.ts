import { app } from "./app";

const start = async () => {
  console.log("starting up.....!!!!!");
  const PORT = '3000'

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!!!!`);
  });
};

start();

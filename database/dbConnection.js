import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://Muthamizhhari:Muthamizhhari@thamizh.xxoiz.mongodb.net/thamizh?retryWrites=true&w=majority&appName=thamizh")
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database: ${err}`);
    });
};

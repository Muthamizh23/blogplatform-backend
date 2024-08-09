export const dbConnection = () => {
  mongoose.connect('mongodb+srv://Muthamizhhari:Muthamizhhari@thamizh.xxoiz.mongodb.net/thamizh?retryWrites=true&w=majority&appName=thamizh')
      .then( () => {
          console.log('Connected to database ')
      })
      .catch( (err) => {
          console.error(`Error connecting to the database. \n${err}`);
      })
  
      
    // mongoose
    //   .connect('mongodb+srv://Muthamizhhar:Muthamizhhari@thamizh.xxoiz.mongodb.net/?retryWrites=true&w=majority&appName=thamizh', {
    //     dbName: "thamizh",
    //   })
    //   .then(() => {
    //     console.log("Connected to database!");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     console.log(Some error occured while connecting to database: ${err});
    //   });
  };
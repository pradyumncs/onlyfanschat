import mongoose from "mongoose";

const connect = async () => {
    try {
    const conn = await mongoose.connect(process.env.MONGO3, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
   
    });
    console.log("MongoDB Connected:succesfull");
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
}


export default connect
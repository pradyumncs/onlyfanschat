import mongoose from 'mongoose';

const connect = async () => {

try{
    await mongoose.connect(process.env.MONGODB_URI2, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('Connected to MongoDB');
} catch(err) {
    console.log(err);
}
}
export default connect;
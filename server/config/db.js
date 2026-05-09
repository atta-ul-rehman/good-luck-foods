import mongoose from 'mongoose';

let connectionPromise = null;

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            return mongoose.connection;
        }

        if (!connectionPromise) {
            connectionPromise = mongoose.connect(process.env.MONGO_URI)
                .then((conn) => {
                    console.log('MongoDB Connected...');
                    return conn;
                })
                .catch((err) => {
                    connectionPromise = null;
                    throw err;
                });
        }

        await connectionPromise;
        return mongoose.connection;
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;

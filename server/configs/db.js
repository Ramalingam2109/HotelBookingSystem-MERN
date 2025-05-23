import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => {
      console.log('✅ Database Connected');
    });
    
    mongoose.connection.on('error', (err) => {
      console.log('❌ Database Error:', err);
    });

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "hotel-booking", // Better way to specify database
      serverSelectionTimeoutMS: 5000 // Timeout after 5s instead of 30s
    });
    
    console.log(`MongoDB Connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.error('Database Connection Failed:', error.message);
    process.exit(1); // Exit with failure
  }
};

export default connectDB; 
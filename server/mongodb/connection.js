import mongoose from 'mongoose';

export default async (uri, dbName) => {
  try {
    await mongoose.connect(uri, { dbName });
  } catch (error) {
    throw error;
  }
};

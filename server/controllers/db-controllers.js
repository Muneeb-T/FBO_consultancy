import mongoose, { mongo } from 'mongoose';

const getStorageUsed = async (req, res) => {
  try {
    const dbStats = await mongoose.connection.db.stats({ scale: 1024 * 1024 });
    const { storageSize } = dbStats;
    const storage = {
      usedStorage: storageSize.toFixed(2),
      totalStorage: (512).toFixed(2),
    };
    res.status(200).json({
      success: true,
      storage,
      message: 'Database memory fetched successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
    });
  }
};

export default { getStorageUsed };

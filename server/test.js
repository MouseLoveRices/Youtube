import mongoose from 'mongoose';
import chai from 'chai';
const expect = chai.expect;

describe('Database connection test', function() {
  
  it('should connect to the database successfully', async () => {
    try {
      const mongoDBConnectionString = ('mongodb+srv://hieu:hieu@cluster0.olngtbu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
      await mongoose.connect(mongoDBConnectionString);
      expect(mongoose.connection.readyState).to.equal(1);
      console.log('Successfully connected to MongoDB');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
      throw err;
    } finally {
      await mongoose.connection.close();
    }
  });
});

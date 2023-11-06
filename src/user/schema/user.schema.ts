import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: { type: String },
  age: { type: Number },
  address: {
    state: { type: String },
    city: { type: String },
  },
});

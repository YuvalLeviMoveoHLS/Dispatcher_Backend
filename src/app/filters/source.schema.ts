import mongoose, { Schema } from 'mongoose';

export const sourceSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  url: String,
  category: String,
  language: String,
  country: String,
});

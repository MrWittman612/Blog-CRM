'use strict';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const BlogModelSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
});
// Compile model from schema
export const BlogModel = mongoose.model('BlogModel', BlogModelSchema);

import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

const user = process.env.USER_NAME;
const pw = process.env.PW;
const db = process.env.DB;

const URI = `mongodb+srv://${user}:${pw}@sandbox-azhmt.mongodb.net/${db}?retryWrites=true&w=majority`;

mongoose.connect(URI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const { Schema } = mongoose;

const User = new Schema({
    name: {
        type: String,
        required: true
      },
    email: {
        type: String,
        required: true,
        index: {
          unique: true,
          sparse: true
        }
    },
    password: {
       type: String,
       required: true
    }
});

const Phrase = new Schema({
  english : {
    type: String,
    required: true
  },
  yor_explanation: {
    type: String,
    required: true
  },
  yor_spoken: {
    type: String,
    required: true
  },
  yor_intonation: {
    type: String,
    required: true
  },
  yor_video: {
    type: String,
    required: true
  }

});

Phrase.index({english: 'text'});

export { User, Phrase }

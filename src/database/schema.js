import { schema } from mon
import mongoose from "mongoose";

const { Schema } = mongoose;

const User = new Schema({
    name: {
        first: String,
        last: String,
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


export { User }

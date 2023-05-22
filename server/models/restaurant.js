import { Schema, model } from "mongoose";

const RestaurantSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email Already Exists!"],
    required: [true, "Email is Required!"],
  },
  username: {
    type: String,
    required: [true, "Username is Required!"],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username Invalid, it Should Contain 8-20 Alphanumeric Letters and be Unique!"],
  },
  image: {
    type: String,
  },
  address: {
    type: String,
    required: [true, "Please Specify an Address for the Restaurant!"],
  },
  phone: {
    type: String,
  },
});

const Restaurant = model("Restaurant", RestaurantSchema);

export default Restaurant;
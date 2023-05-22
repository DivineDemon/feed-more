import { Schema, model } from "mongoose";

const ItemSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  name: {
    type: String,
    required: [true, "Name of the Item is Required!"],
  },
  quantity: {
    type: Number,
    required: [true, "Please Specify the Amount of `Item` you Have."],
  },
  description: {
    type: String,
  },
  perishable: {
    type: Boolean,
    required: [true, "Please Specify if the Item is Perishable!"],
  },
  expiresIn: {
    type: Date,
  },
});

const Item = model("Item", ItemSchema);

export default Item;
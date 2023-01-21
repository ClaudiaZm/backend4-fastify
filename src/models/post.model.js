import mongoose from "mongoose";

const { Schema, model } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "el title es obligatorio"],
    },
    description: {
      type: String,
      required: [true, "la description es obligatoria"],
    },
    imgUrl: {
      type: String,
      default: null,
    },
    public_id: String,

    user: {
      type: Schema.Types.ObjectId,
      ref: "user"
    }

  },
  {
    timestamps: true,
  }
);
postSchema.methods.setImg = function setImg({ secure_url, public_id }) {
  this.imgUrl = secure_url;
  this.nameImage = public_id;
}

export const postModel = model("post", postSchema)

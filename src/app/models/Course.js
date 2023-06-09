const mongoose = require("mongoose");

const slug = require("mongoose-slug-updater");
const Comment = require("./Comment");
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, maxLength: 600 },
    imageUrl: { type: String, maxLength: 255 },
    price: { type: Number, equired: true },
    category: { type: String, equired: true },
    slug: { type: String, slug: "name", unique: true },
},
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Courses", Course);

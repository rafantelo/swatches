const mongoose = require('mongoose');

const swatchSchema = mongoose.Schema({
    name  : { type: String, required: true, unique: true, index: true },
    active: { type: Boolean, required: true },
    price : { type: String, required: true },
    image : { type: String },
    thumb : { type: String },
    color : { type: String },
    date  : { type: Date, required: true }
  }
);

module.exports = mongoose.model('Swatch', swatchSchema);
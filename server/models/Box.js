const { Schema, model } = require('mongoose');

const boxSchema = new Schema(
  {
    donuts: {
      type: Schema.Types.ObjectId,
      ref: 'Donut',
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Box = model('Box', boxSchema);

module.exports = Box;

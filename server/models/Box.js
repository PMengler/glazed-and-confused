const { Schema, model } = require('mongoose');

const boxSchema = new Schema(
  {
    donuts: [{
      type: Schema.Types.ObjectId,
      ref: 'Donut',
    }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
  );
  
  boxSchema
    .virtual('boxPrice')
    .get(() => {
      const boxPrice = null;
      
      this.donuts.forEach(donut => {
        boxPrice = boxPrice + donut.price;
      });
      return boxPrice;
    });
  
  const Box = model('Box', boxSchema);
  
  module.exports = Box;
  
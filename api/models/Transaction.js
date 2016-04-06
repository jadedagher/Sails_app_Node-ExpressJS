/**
 * Transaction.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true, // important à mettre "securité"


  attributes: {

    id_transaction: {
      type: "string",
      primaryKey: true,
      unique: true,
      columnName: 'id of the transaction'
    },

    pseudo: {
      type: "string",
      unique: true,
      columnName: 'id of the user who make the deal'

    },

    type: {
      type: "string",
      columnName: 'buy or sell'

    },

    date: {
      type: 'datetime',
      columnName: 'date'
    },

    symbol: {
      type: 'string',
      columnName: 'symbol'
    },

    price: {
      type: 'float',
      columnName: 'price'
    },


    volume: {
      type: 'integer',
      columnName: 'volume'
    },

    state: {
      type: 'string',
      enum: ['pending', 'approved', 'denied']
    }


  }
};


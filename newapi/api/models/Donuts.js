/**
 * Donuts.js
 *
 * @description :: Model of a donut, and what it tastes like, what frostings it might have, and whether they're in stock.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	flavor: {
  		type: 'string',
  		defaultsTo: 'vanilla',
  		enum: ['vanilla', 'chocolate', 'blueberry', 'strawberry'],
  		required: true,
  	},
  	frosting:{
  		type: 'string',
  		required: true,
  		minLength: 2
  	},
  	extras: {
  		type: 'string'
  	},
  	inStock: {
  		type: 'boolean',
  		required: true
  	}
  }
};


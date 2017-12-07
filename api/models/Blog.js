/**
 * Blog.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

	tableName: 'blog',
	datastore: 'mysqlBlog',

	attributes: {
		id: { type: 'number', autoIncrement: true },
		title: { type: 'string', required: true, maxLength: 255 },
		slug: { type: 'string', unique: true },
		content: { type: 'string', required: true, columnType: 'text' }
	}
};

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'edits'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('feito_por').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.string('descricao')
      table.timestamp('feito_em')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

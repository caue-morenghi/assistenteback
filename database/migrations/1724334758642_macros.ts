import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'macros'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('usuario_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.date('data').notNullable()
      table.decimal('calorias', 5, 2).notNullable()
      table.decimal('proteinas', 5, 2).notNullable()
      table.decimal('carboidratos', 5, 2).notNullable()
      table.decimal('gorduras', 5, 2).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

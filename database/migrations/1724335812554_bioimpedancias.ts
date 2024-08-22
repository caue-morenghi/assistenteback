import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'bioimpedancias'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('usuario_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.datetime('data').notNullable()
      table.decimal('peso', 5, 2).notNullable()
      table.decimal('percentual_gordura', 5, 2).notNullable()
      table.decimal('percentual_musculo', 5, 2).notNullable()
      table.decimal('tmb', 5, 2).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

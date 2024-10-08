import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'treinos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.datetime('data').notNullable()
      table.integer('area_id').unsigned().references('id').inTable('areas').onDelete('CASCADE')
      table.integer('usuario_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

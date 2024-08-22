import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'refeicaos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('usuario_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.dateTime('data')
      table.decimal('quantidade', 5, 2)
      table.integer('alimento_id').unsigned().references('id').inTable('alimentos').onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'medidas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('usuario_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.decimal('panturrilha_esquerda', 5, 1)
      table.decimal('panturrilha_direita', 5, 1)
      table.decimal('perna_esquerda', 5, 1)
      table.decimal('perna_direita', 5, 1)
      table.decimal('abdomen', 5, 1)
      table.decimal('peitoral', 5, 1)
      table.decimal('braco_esquerdo', 5, 1)
      table.decimal('braco_direito', 5, 1)
      table.decimal('antebraco_esquerdo', 5, 1)
      table.decimal('antebraco_direito', 5, 1)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

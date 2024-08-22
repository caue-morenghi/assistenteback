import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'cargas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('exercicio_id').unsigned().references('id').inTable('exercicios').onDelete('CASCADE')
      table.integer('usuario_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('treino_id').unsigned().references('id').inTable('treinos').onDelete('CASCADE')
      table.integer('area_id').unsigned().references('id').inTable('areas').onDelete('CASCADE')
      table.integer('series')
      table.integer('repeticoes')
      table.integer('carga')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

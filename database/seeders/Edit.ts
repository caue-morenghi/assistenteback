import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Edit from 'App/Models/Edit'

export default class extends BaseSeeder {
  public async run () {
    await Edit.createMany([
      {
        feitoPor: 1,
        descricao: 'Edição de usuário',
      },
      {
        feitoPor: 1,
        descricao: 'Remoção de usuário',
      },
      {
        feitoPor: 1,
        descricao: 'Adição de usuário',
      }
    ])
  }
}
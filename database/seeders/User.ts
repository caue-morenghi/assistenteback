import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    const uniqueKey = 'email'

    await User.updateOrCreateMany(uniqueKey, [
      {
        username: 'cauemorenghi',
        email: 'cauemorenghi@gmail.com',
        password: '12345678',
        perfil: 1,
        status: true
      },
      {
        username: 'luanmorenghi',
        email: 'luanmorenghi@gmail.com',
        password: '12345678',
        perfil: 0,
        status: true
      }
    ])
  }
}
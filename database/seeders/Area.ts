import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Area from 'App/Models/Area'

export default class extends BaseSeeder {
  public async run() {
    await Area.createMany([
      {
        nome: 'Panturrilha',
      },
      {
        nome: 'Quadríceps',
      },
      {
        nome: 'Posterior de coxa',
      },
      {
        nome: 'Glúteos',
      },
      {
        nome: 'Adutores',
      },
      {
        nome: 'Abdutores',
      },
      {
        nome: 'Abdômen',
      },
      {
        nome: 'Peitoral Superior',
      },
      {
        nome: 'Peitoral Médio',
      },
      {
        nome: 'Peitoral Inferior',
      },
      {
        nome: 'Ombro Frontal',
      },
      {
        nome: 'Ombro Lateral',
      },
      {
        nome: 'Ombro Posterior',
      },
      {
        nome: 'Bíceps',
      },
      {
        nome: 'Tríceps',
      },
      {
        nome: 'Antebraço',
      },
      {
        nome: 'Costas',
      },
      {
        nome: 'Trapézio',
      }
    ])
  }
}

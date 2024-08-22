import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Medida from 'App/Models/Medida'

export default class extends BaseSeeder {
  public async run () {
    await Medida.createMany([
      {
        abdomen: 78.5,
        antebracoDireito: 24.5,
        antebracoEsquerdo: 23.5,
        bracoDireito: 30,
        bracoEsquerdo: 30,
        panturrilhaDireita: 35,
        panturrilhaEsquerda: 34,
        pernaDireita: 50.5,
        pernaEsquerda: 48.5,
        peitoral: 111,
        usuarioId: 1
      },
      {
        abdomen: 78.5,
        antebracoDireito: 24,
        antebracoEsquerdo: 25,
        bracoDireito: 31,
        bracoEsquerdo: 31,
        panturrilhaDireita: 34.5,
        panturrilhaEsquerda: 35.5,
        pernaDireita: 51,
        pernaEsquerda: 50,
        peitoral: 113.5,
        usuarioId: 1
      }
    ])
  }
}

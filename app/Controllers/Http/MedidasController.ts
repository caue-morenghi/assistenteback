import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Medida from 'App/Models/Medida'

export default class MedidasController {
  public async index({}: HttpContextContract) {
    const medidas = await Medida.all()
    return medidas
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['usuarioId', 'panturrilhaEsquerda', 'panturrilhaDireita', 'pernaEsquerda', 'pernaDireita', 'abdomen', 'peitoral', 'bracoEsquerdo', 'bracoDireito', 'antebracoEsquerdo', 'antebracoDireito'])
    const medida = await Medida.create(data)
    return medida
  }

  public async show({ params }: HttpContextContract) {
    const medida = await Medida.findOrFail(params.id)
    return medida
  }

  public async update({ request, params }: HttpContextContract) {
    const data = request.only(['usuarioId', 'panturrilhaEsquerda', 'panturrilhaDireita', 'pernaEsquerda', 'pernaDireita', 'abdomen', 'peitoral', 'bracoEsquerdo', 'bracoDireito', 'antebracoEsquerdo', 'antebracoDireito'])
    const medida = await Medida.findOrFail(params.id)
    medida.merge(data)
    await medida.save()
    return medida
  }

  public async destroy({ params }: HttpContextContract) {
    try {
      const medida = await Medida.findOrFail(params.id)
      await medida.delete()
      return 'Medida excluída com sucesso'
    } catch (error) {
      return 'Erro ao excluir medida'
    }
  }

}

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Treino from 'App/Models/Treino'

export default class TreinosController {
  public async index({}: HttpContextContract) {
    const treinos = await Treino.all()
    return treinos
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['data', 'area_id', 'usuario_id'])
    const treino = await Treino.create(data)
    return treino
  }

  public async show({ params }: HttpContextContract) {
    const treino = await Treino.findOrFail(params.id)
    return treino
  }

  public async update({ params, request }: HttpContextContract) {
    const data = request.only(['data', 'area_id', 'usuario_id'])
    const treino = await Treino.findOrFail(params.id)
    treino.merge(data)
    await treino.save()
    return treino
  }

  public async destroy({ params }: HttpContextContract) {
    try {
      const treino = await Treino.findOrFail(params.id)
      await treino.delete()
      return 'Treino excluído com sucesso'
    } catch (error) {
      return 'Erro ao excluir treino'
    }
  }
}
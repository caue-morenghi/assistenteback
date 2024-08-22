import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Carga from 'App/Models/Carga'

export default class CargasesController {
  public async index({}: HttpContextContract) {
    const cargas = await Carga.all()
    return cargas
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['exercicio_id', 'usuario_id', 'treino_id', 'area_id', 'series', 'repeticoes', 'carga'])
    const carga = await Carga.create(data)
    return carga
  }

  public async show({ params }: HttpContextContract) {
    const carga = await Carga.findOrFail(params.id)
    return carga
  }

  public async update({ request, params }: HttpContextContract) {
    const data = request.only(['exercicio_id', 'usuario_id', 'treino_id', 'area_id', 'series', 'repeticoes', 'carga'])
    const carga = await Carga.findOrFail(params.id)
    carga.merge(data)
    await carga.save()
    return carga
  }

  public async destroy({ params }: HttpContextContract) {
    try {
      const carga = await Carga.findOrFail(params.id)
      await carga.delete()
      return 'Carga excluído com sucesso'
    } catch (error) {
      return 'Erro ao excluir carga'
    }
  }
}

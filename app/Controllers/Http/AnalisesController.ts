import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Analise from 'App/Models/Analise'

export default class AnalisesController {
  public async index({}: HttpContextContract) {
    const analises = await Analise.all()
    return analises
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['usuario_id', 'data', 'tipo', 'descricao'])
    const analise = await Analise.create(data)
    return analise
  }

  public async show({ params }: HttpContextContract) {
    const analise = await Analise.findOrFail(params.id)
    return analise
  }

  public async update({ request, params }: HttpContextContract) {
    const data = request.only(['usuario_id', 'data', 'tipo', 'descricao'])
    const analise = await Analise.findOrFail(params.id)
    analise.merge(data)
    await analise.save()
    return analise
  }

  public async destroy({ params }: HttpContextContract) {
    try {
      const analise = await Analise.findOrFail(params.id)
      await analise.delete()
      return 'Análise excluída com sucesso'
    } catch (error) {
      return 'Erro ao excluir análise'
    }
  }

}

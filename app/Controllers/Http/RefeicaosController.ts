import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Refeicao from 'App/Models/Refeicao'

export default class RefeicaosController {
  public async index({}: HttpContextContract) {
    const refeicaos = await Refeicao.all()
    return refeicaos
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['usuarioId', 'data', 'quantidade', 'alimentoId'])
    const refeicao = await Refeicao.create(data)
    return refeicao
  }

  public async show({ params }: HttpContextContract) {
    const refeicao = await Refeicao.findOrFail(params.id)
    return refeicao
  }

  public async update({ request, params }: HttpContextContract) {
    const data = request.only(['usuarioId', 'data', 'quantidade', 'alimentoId'])
    const refeicao = await Refeicao.findOrFail(params.id)
    refeicao.merge(data)
    await refeicao.save()
    return refeicao
  }

  public async destroy({ params }: HttpContextContract) {
    try {
      const refeicao = await Refeicao.findOrFail(params.id)
      await refeicao.delete()
      return 'Refeição excluído com sucesso'
    } catch (error) {
      return 'Erro ao excluir refeição'
    }
  }

}

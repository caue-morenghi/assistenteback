import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Resultado from 'App/Models/Resultado'

export default class ResultadosController {
  public async index({}: HttpContextContract) {
    const resultados = await Resultado.all()
    return resultados
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['usuario_id', 'data', 'tipo', 'descricao'])
    const resultado = await Resultado.create(data)
    return resultado
  }

  public async show({ params }: HttpContextContract) {
    const resultado = await Resultado.findOrFail(params.id)
    return resultado
  }

  public async update({ params, request }: HttpContextContract) {
    const data = request.only(['usuario_id', 'data', 'tipo', 'descricao'])
    const resultado = await Resultado.findOrFail(params.id)
    resultado.merge(data)
    await resultado.save()
    return resultado
  }

  public async destroy({ params }: HttpContextContract) {
    try {
      const resultado = await Resultado.findOrFail(params.id)
      await resultado.delete()
      return 'Análise excluída com sucesso'
    } catch (error) {
      return 'Erro ao excluir análise'
    }
  }
}
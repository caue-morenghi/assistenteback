import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Alimento from 'App/Models/Alimento'

export default class AlimentosController {
  public async index({}: HttpContextContract) {
    const alimentos = await Alimento.all()
    return alimentos
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['nome', 'marca', 'calorias', 'proteinas', 'carboidratos', 'gorduras'])
    const alimento = await Alimento.create(data)
    return alimento
  }

  public async show({ params }: HttpContextContract) {
    const alimento = await Alimento.findOrFail(params.id)
    return alimento
  }

  public async update({ request, params }: HttpContextContract) {
    const data = request.only(['nome', 'marca', 'calorias', 'proteinas', 'carboidratos', 'gorduras'])
    const alimento = await Alimento.findOrFail(params.id)
    alimento.merge(data)
    await alimento.save()
    return alimento
  }

  public async destroy({ params }: HttpContextContract) {
    try {
      const alimento = await Alimento.findOrFail(params.id)
      await alimento.delete()
      return 'Alimento excluído com sucesso'
    } catch (error) {
      return 'Erro ao excluir alimento'
    }
  }

}

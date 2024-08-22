import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Bioimpedancia from 'App/Models/Bioimpedancia'

export default class BioimpedanciasController {
  public async index({}: HttpContextContract) {
    const bioimpedancias = await Bioimpedancia.all()
    return bioimpedancias
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['usuario_id', 'data', 'peso', 'percentual_gordura', 'percentual_musculo', 'tmb'])
    const bioimpedancia = await Bioimpedancia.create(data)
    return bioimpedancia
  }

  public async show({ params }: HttpContextContract) {
    const bioimpedancia = await Bioimpedancia.findOrFail(params.id)
    return bioimpedancia
  }

  public async update({ request, params }: HttpContextContract) {
    const data = request.only(['usuario_id', 'data', 'peso', 'percentual_gordura', 'percentual_musculo', 'tmb'])
    const bioimpedancia = await Bioimpedancia.findOrFail(params.id)
    bioimpedancia.merge(data)
    await bioimpedancia.save()
    return bioimpedancia
  }

  public async destroy({ params }: HttpContextContract) {
    try {
      const bioimpedancia = await Bioimpedancia.findOrFail(params.id)
      await bioimpedancia.delete()
      return 'Bioimpedancia excluído com sucesso'
    } catch (error) {
      return 'Erro ao excluir bioimpedancia'
    }
  }

}

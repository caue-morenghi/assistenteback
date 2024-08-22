import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Macro from 'App/Models/Macro'

export default class MacrosController {
  public async index({}: HttpContextContract) {
    const macros = await Macro.all()
    return macros
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['usuario_id', 'data', 'calorias', 'proteinas', 'carboidratos', 'gorduras'])
    const macro = await Macro.create(data)
    return macro
  }

  public async show({ params }: HttpContextContract) {
    const macro = await Macro.findOrFail(params.id)
    return macro
  }

  public async update({ request, params }: HttpContextContract) {
    const data = request.only(['usuario_id', 'data', 'calorias', 'proteinas', 'carboidratos', 'gorduras'])
    const macro = await Macro.findOrFail(params.id)
    macro.merge(data)
    await macro.save()
    return macro
  }

  public async destroy({ params }: HttpContextContract) {
    try {
      const macro = await Macro.findOrFail(params.id)
      await macro.delete()
      return 'Macro excluído com sucesso'
    } catch (error) {
      return 'Erro ao excluir macro'
    }
  }

}

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Area from 'App/Models/Area'

export default class AreasController {
  public async index({}: HttpContextContract) {
    const areas = await Area.all()
    return areas
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['nome'])
    const area = await Area.create(data)
    return area
  }

  public async show({ params }: HttpContextContract) {
    const area = await Area.findOrFail(params.id)
    return area
  }

  public async update({ params, request }: HttpContextContract) {
    const data = request.only(['nome'])
    const area = await Area.findOrFail(params.id)
    area.merge(data)
    await area.save()
    return area
  }

  public async destroy({ params }: HttpContextContract) {
    try {
      const area = await Area.findOrFail(params.id)
      await area.delete()
      return 'Área excluída com sucesso'
    } catch (error) {
      return 'Erro ao excluir área'
    }
  }
}
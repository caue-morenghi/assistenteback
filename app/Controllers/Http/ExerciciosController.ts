import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Exercicio from 'App/Models/Exercicio'

export default class ExerciciosController {
  public async index({}: HttpContextContract) {
    const exercicios = await Exercicio.all()
    return exercicios
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['nome', 'unilateral', 'area_id'])
    const exercicio = await Exercicio.create(data)
    return exercicio
  }

  public async show({ params }: HttpContextContract) {
    const exercicio = await Exercicio.findOrFail(params.id)
    return exercicio
  }

  public async update({ request, params }: HttpContextContract) {
    const data = request.only(['nome', 'unilateral', 'area_id'])
    const exercicio = await Exercicio.findOrFail(params.id)
    exercicio.merge(data)
    await exercicio.save()
    return exercicio
  }

  public async destroy({ params }: HttpContextContract) {
    try {
      const exercicio = await Exercicio.findOrFail(params.id)
      await exercicio.delete()
      return 'Exercício excluído com sucesso'
    } catch (error) {
      return 'Erro ao excluir exercício'
    }
  }

}

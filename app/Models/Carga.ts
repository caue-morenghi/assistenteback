import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Carga extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public exercicioId: number

  @column()
  public usuarioId: number

  @column()
  public treinoId: number

  @column()
  public areaId: number

  @column()
  public series: number

  @column()
  public repeticoes: number

  @column()
  public carga: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

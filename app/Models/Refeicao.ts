import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Refeicao extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public usuarioId: number

  @column.dateTime()
  public data: DateTime

  @column()
  public quantidade: number

  @column()
  public alimentoId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

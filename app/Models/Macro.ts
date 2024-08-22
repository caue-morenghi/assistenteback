import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Macro extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public usuarioId: number

  @column.date()
  public data: DateTime

  @column()
  public calorias: number

  @column()
  public proteinas: number

  @column()
  public carboidratos: number

  @column()
  public gorduras: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

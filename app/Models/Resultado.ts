import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Resultado extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public usuarioId: number

  @column()
  public data: DateTime

  @column()
  public tipo: string

  @column()
  public descricao: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

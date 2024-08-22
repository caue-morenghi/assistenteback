import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Medida extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public usuarioId: number

  @column()
  public panturrilhaEsquerda: number

  @column()
  public panturrilhaDireita: number

  @column()
  public pernaEsquerda: number

  @column()
  public pernaDireita: number

  @column()
  public abdomen: number

  @column()
  public peitoral: number

  @column()
  public bracoEsquerdo: number

  @column()
  public bracoDireito: number

  @column()
  public antebracoEsquerdo: number

  @column()
  public antebracoDireito: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

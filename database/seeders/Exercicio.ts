import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Exercicio from 'App/Models/Exercicio'

export default class extends BaseSeeder {
  public async run() {
    await Exercicio.createMany([
      {
        nome: 'Panturrilha Sentado',
        unilateral: 0,
        areaId: 7,
      },
      {
        nome: 'Panturrilha em pé',
        unilateral: 0,
        areaId: 7,
      },
      {
        nome: 'Pantrurrilha no Hack',
        unilateral: 0,
        areaId: 7,
      },
      {
        nome: 'Pantrurrilha no Leg Press',
        unilateral: 0,
        areaId: 7,
      },
      {
        nome: 'Cadeira Extensora',
        unilateral: 0,
        areaId: 8,
      },
      {
        nome: 'Cadeira Flexora',
        unilateral: 0,
        areaId: 9,
      },
      {
        nome: 'Agachamento Livre',
        unilateral: 0,
        areaId: 8,
      },
      {
        nome: 'Leg Press',
        unilateral: 0,
        areaId: 8,
      },
      {
        nome: 'Hack Machine',
        unilateral: 0,
        areaId: 8,
      },
      {
        nome: 'Mesa Flexora',
        unilateral: 0,
        areaId: 9,
      },
      {
        nome: 'Stiff',
        unilateral: 0,
        areaId: 9,
      },
      {
        nome: "Elevação Pélvica",
        unilateral: 0,
        areaId: 10,
      },
      {
        nome: "Cadeira Adutora",
        unilateral: 0,
        areaId: 11,
      },
      {
        nome: "Cadeira Abdutora",
        unilateral: 0,
        areaId: 12,
      },
      {
        nome: "Abdomen na Máquina",
        unilateral: 0,
        areaId: 13,
      },
      {
        nome: "Prancha",
        unilateral: 0,
        areaId: 13,
      },
      {
        nome: "Adominal Apoiado",
        unilateral: 0,
        areaId: 13,
      },
      {
        nome: "Adominal na polia alta",
        unilateral: 0,
        areaId: 13,
      },
      {
        nome: "Supino Inclinado",
        unilateral: 0,
        areaId: 14,
      },
      {
        nome: "Cross Over polia baixa",
        unilateral: 0,
        areaId: 14,
      },
      {
        nome: "Crucifixo Inclinado",
        unilateral: 0,
        areaId: 14,
      },
      {
        nome: "Supino Reto",
        unilateral: 0,
        areaId: 15,
      },
      {
        nome: "Crucifixo Reto",
        unilateral: 0,
        areaId: 15,
      },
      {
        nome: "Crossover Polia média",
        unilateral: 0,
        areaId: 15,
      },
      {
        nome: "Supino Declinado",
        unilateral: 0,
        areaId: 16,
      },
      {
        nome: "Crucifixo Declinado",
        unilateral: 0,
        areaId: 16,
      },
      {
        nome: "Crossover Polia alta",
        unilateral: 0,
        areaId: 16,
      },
      {
        nome: "Barra Paralela alongada",
        unilateral: 0,
        areaId: 16,
      },
      {
        nome: "Elevação Frontal",
        unilateral: 0,
        areaId: 17,
      },
      {
        nome: "Desenvolvimento",
        unilateral: 0,
        areaId: 17,
      },
      {
        nome: "Elevação Frontal na polia",
        unilateral: 0,
        areaId: 17,
      },
      {
        nome: "Elevação Lateral",
        unilateral: 0,
        areaId: 18,
      },
      {
        nome: "Elevação Lateral na polia",
        unilateral: 0,
        areaId: 18,
      },
      {
        nome: "Crucifixo Inverso",
        unilateral: 0,
        areaId: 19,
      },
      {
        nome: "Face Pull",
        unilateral: 0,
        areaId: 19,
      },
      {
        nome: "Rosca Direta barra W",
        unilateral: 0,
        areaId: 20,
      },
      {
        nome: "Rosca direta na polia",
        unilateral: 0,
        areaId: 20,
      },
      {
        nome: "Rosca Scott",
        unilateral: 0,
        areaId: 20,
      },
      {
        nome: "Rosca Martelo com Halteres",
        unilateral: 0,
        areaId: 20,
      },
      {
        nome: "Rosca martelo na polia",
        unilateral: 0,
        areaId: 20,
      },
      {
        nome: "Rosca no pulley",
        unilateral: 0,
        areaId: 20,
      },
      {
        nome: "Tríceps corda",
        unilateral: 0,
        areaId: 21,
      },
      {
        nome: "Tríceps coice",
        unilateral: 0,
        areaId: 21,
      },
      {
        nome: "Tríceps testa",
        unilateral: 0,
        areaId: 21,
      },
      {
        nome: "Tríceps na polia",
        unilateral: 0,
        areaId: 21,
      },
      {
        nome: "Tríceps na polia alta",
        unilateral: 0,
        areaId: 21,
      },
      {
        nome: "Tríceps francês",
        unilateral: 0,
        areaId: 21,
      },
      {
        nome: "Tríceps sentado máquina",
        unilateral: 0,
        areaId: 21,
      },
      {
        nome: "Barra paralela encurtada",
        unilateral: 0,
        areaId: 21,
      },
      {
        nome: "Rosca inversa",
        unilateral: 0,
        areaId: 22,
      },
      {
        nome: "Rosca inversa na polia",
        unilateral: 0,
        areaId: 22,
      },
      {
        nome: "Rosca de punho",
        unilateral: 0,
        areaId: 22,
      },
      {
        nome: "Suspensão",
        unilateral: 0,
        areaId: 22,
      },
      {
        nome: "Carregamento de halteres",
        unilateral: 0,
        areaId: 22,
      },
      {
        nome: "Rosca de punho invertida",
        unilateral: 0,
        areaId: 22,
      },
      {
        nome: "Pulley frente",
        unilateral: 0,
        areaId: 23,
      },
      {
        nome: "Barra fixa",
        unilateral: 0,
        areaId: 23,
      },
      {
        nome: "Remada curvada",
        unilateral: 0,
        areaId: 23,
      },
      {
        nome: "Serrote",
        unilateral: 0,
        areaId: 23,
      },
      {
        nome: "Pullover",
        unilateral: 0,
        areaId: 23,
      },
      {
        nome: "Remada baixa",
        unilateral: 0,
        areaId: 23,
      },
      {
        nome: "Remada alta",
        unilateral: 0,
        areaId: 23,
      },
      {
        nome: "Encolhimento",
        unilateral: 0,
        areaId: 24,
      }
    ])
  }
}


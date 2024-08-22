import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('users', 'UsersController')
    .apiOnly()
    .middleware({
      index: ['auth'],
      update: ['auth'],
      show: ['auth'],
      destroy: ['auth'],
    })
})

Route.group(() => {
  Route.resource('/edits', 'EditsController')
  .apiOnly()
}).middleware('auth')

Route.group(() => {
  Route.resource('/medidas', 'MedidasController').apiOnly()
  Route.resource('/macros', 'MacrosController').apiOnly()
  Route.resource('/analises', 'AnalisesController').apiOnly();
  Route.resource('/bioimpedancia', 'BioimpedanciasController').apiOnly();
  Route.resource('/resultados', 'ResultadosController').apiOnly();
  Route.resource('/refeicoes', 'RefeicaosController').apiOnly();
  Route.resource('/alimentos', 'AlimentosController').apiOnly();
  Route.resource('/areas', 'AreasController').apiOnly();
  Route.resource('/treinos', 'TreinosController').apiOnly();
  Route.resource('/cargas', 'CargasesController').apiOnly();
  Route.resource('/exercicios', 'ExerciciosController').apiOnly();
}).middleware('auth');
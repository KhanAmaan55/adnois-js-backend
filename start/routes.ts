import Route from '@ioc:Adonis/Core/Route'
import View from '@ioc:Adonis/Core/View'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/news',"ArticlesController.view").as("news_view")
Route.get('/news/create',"ArticlesController.create").as("news_create")
Route.post('/news',"ArticlesController.store").as("news_store")
Route.get('/news/:slug/edit',"ArticlesController.edit").as("news_edit")

// Route.on('/create').render('article.create').as("news_create");

Route.patch("/news/:slug", "ArticlesController.update").as("news_update");
Route.delete("/news/:slug/delete", "ArticlesController.delete").as("news_delete");
Route.get("/news/:order/sort", "ArticlesController.sort").as("news_sort");
// Route.patch("/news/:id", ({ params }) => {
//   return params
// }).where("id", {
//   match: /^[0-9]+$/,
//   cast: (id) => Number(id),
// }).as("news_update");


// Route.delete("/news/:id", ({ params }) => {
//   return params
// }).where("id", {
//   match: /^[0-9]+$/,
//   cast: (id) => Number(id),
// }).as("news_delete");
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'\
import Database from '@ioc:Adonis/Lucid/Database'
import Article from "App/Models/Article";
import CreateArticleValidator from 'App/Validators/CreateArticleValidator'

export default class ArticlesController {
    public async view({ view }) {
        // const articles = await Database
        //     .from('articles')
        //     .select('*')
        const articles = await Article.all()
        return articles
        // return view.render('article/view', { articles })
    }
    public async create({ view }) {
        return view.render('article/create')
    }
    public async store({ request, response }) {
        const payload = await request.validate(CreateArticleValidator);
        // const x = Math.floor((Math.random() * 10000) + 1)
        await Article.create(payload)
        // await Database.table("articles").insert({
        //     ...payload,
        //     slug: payload.title +x
        // });
        // return response.redirect("/news");
        return {'success':true}


    }

    public async edit({ view, params }) {
        // const { slug } = params;
        const article = await Article.findBy("slug", params.slug)
        // const article = await Database.from('articles').where("slug", slug).first();
        // return view.render('article/edit', { article })
        return article
    }

    public async update({ request, response, params }) {
        const payload = await request.validate(CreateArticleValidator);
        await Article.query().where("slug", params.slug).update(payload)
        // await Database.from('articles').where("slug", params.slug).update(payload);
        // return response.redirect("/news");
        // return Article.query().where("slug", params.slug)
        return {'success':true}
    }
    public async delete({ response, params }) {
        // await Database.from('articles').where("slug", params.slug).delete();
        const article = await Article.findBy("slug", params.slug)
        if (article){
            article.delete();
            return response.redirect().back()
        }
    }
    public async sort({ view, params }) {
        const articles = await Database
            .from('articles')
            .orderBy(params.order, 'asc')
        //   return articles
        return view.render('article/view', { articles })

    }
}

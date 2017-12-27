/**
 * BlogController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    index: function (req, res) {
        return res.view('blog/index', {
            'title' : 'Home',
            layout: 'layouts/blog-layout'
        })
    },

    list: async function (req, res) {
        var blogList;
        try {
            blogList = await Blog.find();
        }
        catch (err) {
            if (err && err.name === 'UsageError') {
                return res.badRequest();
            }
            else if (err) {
                return res.serverError(err);
            }
            console.log('Error: ', err.Message);
        }
        return res.view('blog/list', {
            'title' : 'Blog Archive',
            'blog' : blogList,
            'update' : false,
            'delete' : false,
            layout: 'layouts/blog-layout'
        })
    },

    view: async function (req, res) {
        var blogArticle;
        try {
            blogArticle = await Blog.findOne( {slug : req.param('slug')} );
        }
        catch (err) {
            if (err && err.name === 'UsageError') {
                return res.badRequest();
            }
            else if (err) {
                return res.serverError(err);
            }
            console.log('Error: ', err.Message);
        }
        if (!blogArticle) {
            return res.notFound('Article not found');
        }
        else {
            res.view('blog/view', {
                'title' : blogArticle.title,
                'content' : blogArticle.content,
                layout: 'layouts/blog-layout',
                'success' : req.session.editedFlag
            });
            req.session.editedFlag = false;
            return;
        }
    },

    createGet: function (req, res) {
        return res.view('blog/create', {
            'title' : 'Create a new article',
            'success' : false,
            'invalid' : false,
            layout: 'layouts/blog-layout'
        });
    },

    createPost: async function (req, res) {
        var titleText = req.param('title'); // Fetches title from request parameters
        var newSlug = titleText.toLowerCase().replace(/\s/g,'-'); // Converts title to slug
        var newBlog;
        try {
            newBlog = await Blog.create({ title: req.param('title'), slug: newSlug, content: req.param('content') });
        }
        catch (err) {
            if (err.code === 'E_UNIQUE') {
                return res.view('blog/create', {
                    'title' : 'Create a new article',
                    'success' : false,
                    'invalid' : true,
                    layout: 'layouts/blog-layout'
                });
            }
            else if (err && err.name === 'UsageError') {
                return res.badRequest();
            }
            else if (err) {
                return res.serverError(err);
            }
            console.log('Error: ', err);
        }
        return res.view('blog/create', {
            'title' : 'Create a new article',
            'success' : true,
            'invalid' : false,
            layout: 'layouts/blog-layout'
        });
    },

    editGet: async function (req, res) {
        var blogArticle;
        try {
            blogArticle = await Blog.findOne( {slug : req.param('slug')} );
        }
        catch (err) {
            if (err && err.name === 'UsageError') {
                return res.badRequest();
            }
            else if (err) {
                return res.serverError(err);
            }
            console.log('Error: ', err);
        }
        if (!blogArticle) {
            return res.notFound('Article not found');
        }
        else {
            return res.view('blog/edit', {
                'title' : 'Edit an article',
                'articleTitle' : blogArticle.title,
                'articleContent' : blogArticle.content,
                'invalid' : false,
                layout: 'layouts/blog-layout'
            });
        }
    },

    editPost: async function (req, res) {
        var titleText = req.param('title'); // Fetches title from request parameters
        var oldSlug = String(req.param('slug'));
        var newSlug = titleText.toLowerCase().replace(/\s/g,'-'); // Converts title to slug (a normal title -> a-normal-title)
        var articleUpdate;
        try {
            articleUpdate = await Blog.update({ slug: oldSlug }, { title: req.param('title'), slug: newSlug, content: req.param('content') });
        }
        catch (err) {
            if (err.code === 'E_UNIQUE') {
                return res.view('blog/edit', {
                    'title' : 'Edit an article',
                    'articleTitle' : req.param('oldTitle'),
                    'articleContent' : req.param('oldContent'),
                    'invalid' : true,
                    layout: 'layouts/blog-layout'
                });
            }
            else if (err && err.name === 'UsageError') {
                return res.badRequest();
            }
            else if (err) {
                return res.serverError(err);
            }
            console.log('Error: ', err);
        }
        var newUrl = sails.config.custom.baseUrl+'blog/'+newSlug;
        req.session.editedFlag = true; // Change flag to session
        return res.redirect(newUrl);
    },

    delete: async function (req, res) {
        var destroyedArticle;
        try {
            destroyedArticle = await Blog.destroy({ slug : req.param('slug') }).fetch();
        }
        catch (err) {
            if (err && err.name === 'UsageError') {
                return res.badRequest();
            }
            else if (err) {
                return res.serverError(err);
            }
            console.log('Error: ', err.Message);
        }
        if (destroyedArticle.length === 0) {
            return res.notFound('Article not found');
        }
        else {
            return res.sendStatus(200);
        }
    }
};

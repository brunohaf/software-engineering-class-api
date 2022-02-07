const article_op_service = require('../services/article-operation-services');
const article_theme_service = require('../services/article-theme-services');
const article_comments_service = require('../services/article-comment-services');
const router = require('express').Router();

/**
 *  @swagger
 * /articles-op/trending:
 *   get:
 *     tags:
 *     - "Article"
 *     summary: "Get Trending Articles on the database"
 *     description: "Get Trending Articles on the database"
 *     responses:
 *       200:
 *         description: "The Articles were found!"
 *       401:
 *         description: "Articles were not found'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
 router.get('/trending', async (req, res) => {
    return article_op_service.GetTrendingArticles(res);
});

/**
 *  @swagger
 * /articles-op/top-five:
 *   get:
 *     tags:
 *     - "Article"
 *     summary: "Get Top 5 Articles on the database"
 *     description: "Get Top 5 Articles on the database"
 *     responses:
 *       200:
 *         description: "The Articles were found!"
 *       401:
 *         description: "Articles were not found'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
 router.get('/top-five', async (req, res) => {
    return article_op_service.GetTopFiveArticles(res);
});
/**
 *  @swagger
 * /articles-op/articles/theme:
 *   get:
 *     tags:
 *     - "Article"
 *     summary: "Get All Articles on the database from the given Theme"
 *     description: "Get All Articles on the database from the given Theme"
 *     responses:
 *       200:
 *         description: "The Articles were found!"
 *       401:
 *         description: "Articles were not found'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
 router.get('/articles/theme', async (req, res) => {
    return article_theme_service.GetArticlesByTheme(req, res);
});

/**
 *  @swagger
 * /articles-op/comments/article-id:
 *   get:
 *     tags:
 *     - "Article"
 *     summary: "Get All Articles on the database from the given Theme"
 *     description: "Get All Articles on the database from the given Theme"
 *     responses:
 *       200:
 *         description: "The Articles were found!"
 *       401:
 *         description: "Articles were not found'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
 router.get('/comments/article-id', async (req, res) => {
    return article_comments_service.GetAllCommentsByArticleId(req, res);
});


module.exports = router;

const article_service = require('../services/article-services');
const article_op_service = require('../services/article-operation-services');
const router = require('express').Router();

/**
 *  @swagger
 * /SaveArticle:
 *   post:
 *     tags:
 *     - "Article"
 *     summary: "Add a new Article to the database"
 *     description: "Add a new Article to the database"
 *     parameters:
*     - in: "body"
 *       name: "body"
 *       description: "A Article must have all the properties"
 *       required: false
 *       schema:
 *         type: "article_web"
 *         properties:
 *           id_author:
 *              type: "integer"
 *           id_theme:
 *              type: "integer"
 *           content:
 *              type: "string"
 *           star_score:
 *              type: "integer"
  *           publish_date:
 *              type: "date"
 *           update_date:
 *              type: "date"
 *           comment_count:
 *              type: "integer"
 *     responses:
 *       200:
 *         description: "Article added Successfully"
 *       304:
 *         description: "Article already added"
 *       401:
 *         description: "Wrong Article properties"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.post('/', async (req, res) => {
    return article_service.SaveArticle(req.body,res);
});

/**
 *  @swagger
 * /UpdateArticle:
 *   put:
 *     tags:
 *     - "Article"
 *     summary: "Update a Article on the database"
 *     description: "Update a Article on the database"
 *     parameters:
*     - in: "body"
 *       name: "body"
 *       description: "'id_article' is obligatory to update a Article"
 *       required: false
 *       schema:
*         type: "article_web"
 *         properties:
 *           id_author:
 *              type: "integer"
 *           id_theme:
 *              type: "integer"
 *           content:
 *              type: "string"
 *           star_score:
 *              type: "integer"
 *           publish_date:
 *              type: "date"
 *           update_date:
 *              type: "date"
 *           comment_count:
 *              type: "integer"
 *     responses:
 *       200:
 *         description: "Article updated Successfully"
 *       401:
 *         description: "Wrong Article's 'id_article'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.put('/', async (req, res) => {
    return article_service.UpdateArticle(req.body,res);
});

/**
 *  @swagger
 * /GetAllArticles:
 *   get:
 *     tags:
 *     - "Article"
 *     summary: "Get all Articles on the database"
 *     description: "Get all Articles on the database"
 *     responses:
 *       200:
 *         description: "The Articles were found!"
 *       401:
 *         description: "Articles were not found'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.get('/', async (req, res) => {
    return article_service.GetAllArticles(res);
});

/**
 *  @swagger
 * /GetArticle/byId:
 *   get:
 *     tags:
 *     - "Article"
 *     summary: "Find a Article on the database"
 *     description: "Find a Article on the database"
 *     parameters:
*     - in: "header"
 *       name: "id_article"
 *       description: "'id_article' is obligatory to update a Article"
 *       required: true
 *     responses:
 *       200:
 *         description: "The Article was found!"
 *       401:
 *         description: "Wrong Article's 'id_article'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.get('/byId', async (req, res) => {
    return article_service.GetArticleById(req.header('id_article'),res);
});

/**
 *  @swagger
 * /GetTrendingArticles:
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
 router.get('/', async (req, res) => {
    return article_op_service.GetTrendingArticles(res);
});

/**
 *  @swagger
 * /GetTopFiveArticles:
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
 router.get('/', async (req, res) => {
    return article_op_service.GetTopFiveArticles(res);
});

/**
 *  @swagger
 * /DeleteArticle:
 *   delete:
 *     tags:
 *     - "Article"
 *     summary: "Erase a Article from the database"
 *     description: "Erase a Article on the database"
 *     parameters:
*     - in: "header"
 *       name: "id_article"
 *       description: "'id_article' is obligatory to erase a Article"
 *       required: true
 *     responses:
 *       200:
 *         description: "The Article is now gone!"
 *       401:
 *         description: "Wrong Article's 'id_article'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.delete('/', async (req, res) => {
    return article_service.DeleteArticle(req.header('id_article'),res);
});

module.exports = router;

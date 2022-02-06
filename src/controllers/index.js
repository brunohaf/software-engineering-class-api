const router = require('express').Router();

//Usability EndPoints
router.use('/GetTrendingArticles', require('./article-operations-controller'));
router.use('/GetTopFiveArticles', require('./article-operations-controller'));
router.use('/GetArticlesByTheme', require('./article-operations-controller'));
router.use('/GetAllCommentsByArticleId', require('./article-operations-controller'));

//Article CRUD EndPoints
router.use('/SaveArticle', require('./article-controller'));
router.use('/UpdateArticle', require('./article-controller'));
router.use('/GetArticle', require('./article-controller'));
router.use('/GetAllArticles', require('./article-controller'));
router.use('/DeleteArticle', require('./article-controller'));

//ArticleTheme CRUD EndPoints
router.use('/SaveArticleTheme', require('./article-theme-controller'));
router.use('/UpdateArticleTheme', require('./article-theme-controller'));
router.use('/GetArticleTheme', require('./article-theme-controller'));
router.use('/GetAllArticleThemes', require('./article-theme-controller'));
router.use('/DeleteArticleTheme', require('./article-theme-controller'));

//ArticleComment CRUD EndPoints
router.use('/SaveArticleComment', require('./article-comment-controller'));
router.use('/UpdateArticleComment', require('./article-comment-controller'));
router.use('/GetArticleComment', require('./article-comment-controller'));
router.use('/GetAllRentalCompanies', require('./article-comment-controller'));
router.use('/DeleteArticleComment', require('./article-comment-controller'));

//User CRUD EndPoints
router.use('/SaveUser', require('./user-controller'));
router.use('/UpdateUser', require('./user-controller'));
router.use('/GetUser', require('./user-controller'));
router.use('/GetAllUsers', require('./user-controller'));
router.use('/DeleteUser', require('./user-controller'));
router.use('/Login', require('./user-controller'));

module.exports = router;
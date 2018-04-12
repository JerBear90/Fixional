const https = require('https');
const koa = require('koa');
const views = require('koa-views');
const koaRouter = require('koa-router');
const koaBody = require('koa-bodyparser');
const send = require('koa-send');
const koaRedis = require('koa-redis');

const ReactDOMServer = require('react-dom/server');
const React = require('react');

const mount = require('koa-mount');

const app = new koa();
const router = new koaRouter();

app.use(koaBody({
  formLimit: 1024 * 1024 * 1024
}));

app.use(views(__dirname + '/client', {
  map: {
    html: 'ejs'
  }
}));

// Open URLS
router.get('/images/*', async (ctx, next) => {
  return send(ctx, 'client/' + ctx.path);
});
router.get('/robots.txt', async (ctx, next) => {
  return send(ctx, ctx.path);
});
router.get('/sitemap.xml', async (ctx, next) => {
  return send(ctx, ctx.path);
});

// External site URLs
router.get('/home', async (ctx, next) => {
  return ctx.render("website");
});
router.get('/why', async (ctx, next) => {
  return ctx.render("website");
});

router.get('/pricing', async (ctx, next) => {
  return ctx.render("website");
});
router.get('/login', async (ctx, next) => {
  return ctx.render("website");
});
router.get('/contact', async (ctx, next) => {
  return ctx.render("website");
});
router.get('/about', async (ctx, next) => {
  return ctx.render("website");
});
router.get('/website.js', async (ctx, next) => {
  return send(ctx, 'client/' + ctx.path);
});

router.get('/', async ctx => {
    return ctx.redirect("/home");
});


app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8080, function(){

});

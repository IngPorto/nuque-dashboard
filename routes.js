const routes = require('next-routes')

module.exports = routes()
.add('index')
.add('podcast/index', '/podcast')
.add('podcast/channel', '/:slug-:id')
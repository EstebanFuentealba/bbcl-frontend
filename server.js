const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config')

var app = new (require('express'))();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, hot: true, headers: { 'Access-Control-Allow-Origin': '*' }, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))



app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
});
io.on('connection', function (socket) {
  console.log("Socket connected: " + socket.id);
  socket.on('action', (action) => {
    if(action.type === 'realtime:hello'){
      console.log('Got hello data!', action.data);
      socket.emit('action', {
        type:'REALTIME_MESSAGE', data:'good day!'
      });
    }
  });
  app.get('/update_portada', function(req, res) {
    console.log("update portada")
    socket.broadcast.emit('action', {
      type:'REALTIME_MESSAGE', data:'nueva noticia'
    });
    res.send('OK');
  });
});

server.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});

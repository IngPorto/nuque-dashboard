// server.js
/*const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)

const port = process.env.PORT || 3000

var fs = require("fs");

app.get('/loadService', (req, res) => {
  console.log("Consulta GET: "+ req.params.saludo);
});

/* *******
app.post('/saveService', function (req, res) {
  // Usuario  // Proyecto  // Servicio
  
  var dir = './users_services/' + req.projectCode + '/' + req.serviceCode;
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }
  
  fs.writeFile( dir + "/" + req.filename, req.script , (err) => {
    if (err) {
      res.status(400)
      console.log(err);
    }
    console.log("Se ha guardado el servicio satisfactoriamente.");
  });
})

app.get('/loadService', function (req, res) {
  // Usuario  // Proyecto  // Servicio
  //var fs = require("fs");
  
  var dir = './users_services/' + req.projectCode + '/' + req.serviceCode;

  fs.readFile( dir + req.filename, (err, buf) => {
    if (err){
      res.status(400)
      console.log(err)
    }else {
      res.status(200).send(buf.toString());
      console.log(buf.toString());
      console.log("Se ha entregado el script con éxito.");
    }
  });
})
******** */


/*  Without express
const {createServer} = require('http')
app.prepare().then(() => {
  createServer(handler).listen(port)
})

*/

const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
    
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler()

var fs = require("fs");
    
app.prepare()
.then(() => {
  
  const server = express()

  // parse application/x-www-form-urlencoded
  server.use(bodyParser.urlencoded({ extended: false }));
  // parse application/json
  server.use(bodyParser.json());

  server.post('/loadService', (req, res) => {
    var dir = __dirname + '/users_services/' + req.body.projectCode + '/' + req.body.serviceCode;
    var dir_complete = dir + "/" + req.body.filename

    fs.readFile(dir_complete, (err, data) => {
      if (err) {
        res.status(400);
        console.log(err);
      }
      //var xml = require('xml');
      //res.set('Content-Type', 'text/xml');
      //res.send(xml(data));
      //console.log(data.toString());

      res.jsonp({ workspace: data.toString() })
    });
  });

  server.post('/createServiceDirectory/', (req, res) => {
    var dir = __dirname + '/users_services/' + req.body.projectCode + '/' + req.body.serviceCode;
    var dir_complete = dir + "/" + req.body.filename

    if (!fs.existsSync(dir)){
        fs.mkdir( dir, { "recursive": true }, err => {
          if (err) {
            res.status(400)
            console.log(err);
          }
          console.log("Directorio del servicio creado:: " + dir);
          fs.writeFile( dir_complete, "<xml xmlns=\"http://www.w3.org/1999/xhtml\"></xml>" , (err) => {
            if (err) {
              res.status(400)
              console.log(err);
            }
            console.log("Servicio vacío creado:: " + dir_complete);
          });
        });
    }
  });

  server.post('/saveService', (req, res) => {
    var dir = __dirname + '/users_services/' + req.body.projectCode + '/' + req.body.serviceCode;
    var dir_complete = dir + "/" + req.body.filename

    fs.writeFile( dir_complete , req.body.workspace, (err) => {
      if (err) {
        res.status(400)
        console.log(err);
      }
      console.log("Servicio actualizado :: " + dir_complete );
    });
  }); 

  /**
   * Microservicio para guardar la versión .js del proyecto
   */
  server.post('/deployService', (req, res) => {
    var dir = __dirname + '/users_services/' + req.body.projectCode + '/' + req.body.serviceCode;
    var dir_complete = dir + "/" + req.body.filename

    var data = "var service = function (req) { \n"
    data += req.body.workspace
    data += "\n }; \n module.exports = service;"

    fs.writeFile( dir_complete , data , (err) => {
      if (err) {
        res.status(400)
        console.log(err);
      }
      console.log("Servicio constuido y desplegado :: " + dir_complete );
    });
  }); 

  server.get('/user_service/:proyecto/:servicio', (req, res) => {
    // req.params.proyecto
    // req.params.servicio
    res.send( __dirname + '/users_services/' + req.params.proyecto + "/" + req.params.servicio + "/" + req.params.servicio + ".js" )
    require(__dirname + '/users_services/' + req.params.proyecto + "/" + req.params.servicio + "/" + req.params.servicio + ".js")(req, res)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })


  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
  
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

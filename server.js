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
  // statics
  //server.use(express.static(__dirname + '/public'));

  server.post('/loadService', (req, res) => {
    var dir = __dirname + '/users_services/' + req.body.projectCode + '/' + req.body.serviceCode;
    var dir_complete = dir + "/" + req.body.filename
    
    if (fs.existsSync(dir_complete)){
      fs.readFile(dir_complete, (err, data) => {
        if (err) {
          res.status(400);
          console.log(err);
          res.end();
        }
        //var xml = require('xml');
        //res.set('Content-Type', 'text/xml');
        //res.send(xml(data));
        //console.log(data.toString());

        res.status(200).jsonp({ workspace: data.toString() })
        res.end();

      });
    }else {
      res.jsonp({ workspace: "No se encontró un archivo previamente guardado." }).end();
    }
  });

  server.post('/createServiceDirectory/', (req, res) => {
    var dir = __dirname + '/users_services/' + req.body.projectCode + '/' + req.body.serviceCode;
    var dir_complete = dir + "/" + req.body.filename

    if (!fs.existsSync(dir)){
        fs.mkdir( dir, { "recursive": true }, err => {
          if (err) {
            res.status(400)
            console.log(err);
            res.end();
          }
          console.log("Directorio del servicio creado:: " + dir);
          
          fs.writeFile( dir_complete, "<xml xmlns=\"http://www.w3.org/1999/xhtml\"></xml>" , (err) => {
            if (err) {
              res.status(400)
              console.log(err);
              res.end();
            }
            console.log("Servicio vacío creado:: " + dir_complete);
            res.status(200)
            res.end();
          });
          
        });
    }else {
      res.status(200)
      res.end();
    }
  });

  server.post('/saveService', (req, res) => {
    var dir = __dirname + '/users_services/' + req.body.projectCode + '/' + req.body.serviceCode;
    var dir_complete = dir + "/" + req.body.filename

    fs.writeFile( dir_complete , req.body.workspace, (err) => {
      if (err) {
        res.status(400)
        console.log(err);
        res.end();
      }
      //console.log("-- Workspace -- :: " + req.body.workspace );
      console.log("Servicio actualizado :: " + dir_complete );
      res.status(200)
      res.end();
    });
  }); 

  /**
   * Microservicio para guardar la versión .js del proyecto
   */
  server.post('/deployService', (req, res) => {
    var dir = __dirname + '/users_services/' + req.body.projectCode + '/' + req.body.serviceCode;
    var dir_complete = dir + "/" + req.body.filename

    var data = "var service = function (req, res, server) { \n"
    data += req.body.workspace
    data += "\n }; \n module.exports = service;"

    /*
    fs.writeFile( dir_complete , data , (err) => {
      if (err) {
        res.status(400)
        console.log(err);
      }
      console.log("Servicio construido y desplegado:: " + dir_complete );
      res.status(200).send('')
    });
    */
    fs.writeFile( dir_complete , data, (err) => {
      if (err) {
        res.status(400)
        console.log(err);
        res.end();
      }
      console.log("Servicio construido y desplegado:: " + dir_complete );
      res.status(200)
      res.end();
    });
  }); 

  server.get('/users_services/:proyecto/:servicio', (req, res) => {
    const ruta_servicio = __dirname + '/users_services/' + req.params.proyecto + "/" + req.params.servicio + "/" + req.params.servicio + ".js"
    delete require.cache[require.resolve(ruta_servicio)]    
    res.status(200)
    res.end(require(ruta_servicio)(req, res, server))
    //esta(req, res, server)
    //console.dir(req.fresh)
    //console.dir(require.cache)
    //res.end(req.cookies); // Get dynamic file
    //res.end(req.body);    // Post dynamic file
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

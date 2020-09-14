const http = require('http');
const hosts = '127.0.0.1';
const port = '9000';


const server = http.createServer( (call, response) => {
  response.writeHead(200, {'Content-Type' : 'text/html'});
  response.end('<h1>Hola Mundo!</h1>');
});

server.listen( port, hosts, () => {
  console.log('El servidor esta corriendo en el puerto: ', port, ' con el hosts',  hosts);
})
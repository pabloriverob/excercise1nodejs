// Import a module
module.exports = {
  serverHandle: function (req, res) {
    const url = require('url')
    const qs = require('querystring')
    const route = url.parse(req.url)
    // Import Node url module

    const content = '<!DOCTYPE html>' +
    '<html>' +
    '    <head>' +
    '        <meta charset="utf-8" />' +
    '        <title>ECE AST</title>' +
    '    </head>' +
    '    <body>' +
    '         <p>Hello World !</p>' +
    '    </body>' +
    '</html>'

  const path = route.pathname
  const params = qs.parse(route.query)

  if (path === '/hello' && 'name' in params) {
     if(params['name']=='Team9'){
      res.writeHead(200, {'Content-Type': 'text/html;'});
      res.write('Hello we are Leo and Pablo. We are 20 and 23 years old respectively. We are both mexican students. We ar eboth engineers at ITESM and we love tequila.')
      }
      else{
        res.writeHead(200, {'Content-Type': 'text/html;'});
        res.write('Hello ' + params['name'])
      }
    }
    else if (path === '/') {
      res.writeHead(200, {'Content-Type': 'text/html;'});
      res.write('This works as follows: if you type the URL + /hello?&name= "your name" it will return Hello and your name. if you type the URL + /hello?&name=Team9 it will describe the members in team 9. Any other option will return an error 404. ')
  }
  else{
    res.writeHead(404, {'Content-Type': 'text/html;'});
    res.write('Page not found')
  }
  res.end();
}
}


// curl localhost:8080 or go to http://localhost:8080

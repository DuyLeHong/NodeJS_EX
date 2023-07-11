var http = require('http');
var maytinh = require('./tinhtoan');

function timeMillis () {
  return Date();
} 

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  var x = 17;
  var y = 28;
  var tong = maytinh.phepCong(x, y);

  console.log(timeMillis());

  res.end(`Tong 2 so ${x} va ${y} la: ${tong}`);

}).listen(8000);
const https = require('https');
const query= require('https');

export function validateToken(id_token, done_cb) {
  done_cb({
    gmail_id: 'dummy',
    email: 'vrkwork@gmail.com',
    fullname: 'bee arcade'
  });
    /*
  var postData = querystring.stringify({
    id_token: id_token 
  });

  var options = {
    hostname: 'www.googleapis.com',
    path: '/oauth2/v3/tokeninfo',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  var req = https.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
      console.log('No more data in response.');
    });
  });

  req.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
  });

  // write data to request body
  req.write(postData);
  req.end();
  */
}
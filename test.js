const jwt = require('jsonwebtoken');

const data = jwt.sign({username: "Nguyen Quang Minh", password:123},'12345', {expiresIn: '60*60'});
console.log(data);

// sign dùng await
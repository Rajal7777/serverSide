const secret = 'This will not get export because we will not export it';

const name = 'jonnny';
const peter = 'pan';

module.exports = { name, peter};

//export directly
module.exports.sayHello = function(name) {
    return `Hello, ${name}!`;
};


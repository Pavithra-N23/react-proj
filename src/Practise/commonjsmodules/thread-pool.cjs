const fs = require('fs');
const crypto = require('crypto');

// order of execution also differs because default threadpool size is 4.

// We can chenge the size of the thread pool by using the below code.
process.env.UV_THREADPOOL_SIZE = 1;
crypto.pbkdf2('password', 'salt', 500000, 50, 'sha512', (err, key) => {
    console.log('1 - pbdfk2 done');
})

crypto.pbkdf2("password", 'salt', 500000, 50, 'sha512', (err, key)=> {
    console.log('2 - pbdfk2 done');
})

crypto.pbkdf2("password", 'salt', 500000, 50, 'sha512', (err, key)=> {
    console.log('3 - pbdfk2 done');
})

crypto.pbkdf2("password", 'salt', 500000, 50, 'sha512', (err, key)=> {
    console.log('4 - pbdfk2 done');
})
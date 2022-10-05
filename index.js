const args = process.argv.slice(2);
const path = args[0];

const fs = require('fs');

if (args.length > 1) {
    return console.error('Too many arguments! \nExpected: 1');
}

if (args.length < 1) {
    return console.error('Too few arguments! \nExpected: 1');;
}

const createHugeFile = path => {
    const file = fs.createWriteStream(path)

    for(let i=0; i<= 1e6; i++) {
        file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
    }

    file.end();
}

try {
    if (path) {
        if (!fs.existsSync(path)) {
            createHugeFile(path);
        }
    }
} catch(err) {
    console.error(err);
}

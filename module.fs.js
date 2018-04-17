const fs = require('fs');

var text = fs.readFileSync('textfile.txt', 'utf8');
console.log(text);

fs.readFile('textfile.txt', 'utf8', function (error, data) {
    console.log(data);
});

var data = 'Hello World .. !';

fs.writeFile('TextFileOtherWrite.txt', data, 'utf8', function(error) {
    console.log('WRITE FILE ASYNC COMPLETE');
});

fs.writeFileSync('TextFileOtherWriteSync.txt', data, 'utf8');
console.log('WRITE FILE SYNC COMPLETE');

// Sync
try {
    var data = fs.readFileSync('textfile.txt', 'utf8');
    console.log(data);
} catch (e) {
    console.log(e);
}

try {
    fs.writeFileSync('textfile.txt', 'Hello World!', 'utf8');
    console.log('FILE WRITE COMPLETE');
} catch (e) {
    console.log(e);
}

// Async
fs.readFile('textfile.txt', 'utf8', function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

fs.writeFile('textfile.txt', 'Hello World', 'utf8', function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('FILE WRITE COMPLETE');
    }
});

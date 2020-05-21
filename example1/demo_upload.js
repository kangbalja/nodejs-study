const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        const form = new formidable.IncomingForm();
        // form.parse(req, function (err, fields, files) {
        //     res.write('File uploaded');
        //     res.end();
        // });

        form.parse(req, (err, fields, files) => {
            // console.log('fields:', fields);
            // console.log('files:', files);
            const oldpath = files.filetoupload.path;
            const newpath = 'C:\\Users\\jmkang\\Downloads\\' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });

            // res.write('File uploaded');
            // res.end();
        });

    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);
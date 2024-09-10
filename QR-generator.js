const inquirer = require("inquirer");
const qr = require("qr-image");
const fs = require("fs");
inquirer.default
    .prompt([
        {message : "type your URl",
            name: "url"
        }
    ])

    .then((answer) => {
        const url = answer.url;
        var qr_png = qr.image(url);
        qr_png.pipe(fs.createWriteStream("qr.png"));

        fs.writeFile("url.txt", url, (err) =>{
            if (err) throw err;
            console.log("The URL is saved");
        });
    })

    .catch((err) => {
        if (err.isTtyError){
            Console.log("There are some error to generating");
        }
        else{
            console.log("URl is invalid");
        }
        
    })
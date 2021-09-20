
// console.log(__dirname);

// console.log(__filename);

// console.log()

// function someFunction() {
//     console.log("HEllo")
// }

// module.export = someFunction();

// const { fstat } = require("fs");


// const fs = require("fs/promises");


// async function fileSystem() {

//     const file = await fs.readFile("./demo.txt", "utf8")
//     console.log(file)
//     await fs.appendFile("./world.txt", "GTBIT")
//     await fs.appendFile("./world1.txt", "GTBIT")
//     await fs.unlink("./world1.txt") //delte the file
//     // await fs.mkdir("world")
//     await fs.appendFile("./world/world.txt", "GTBIT")
//     await fs.writeFile("./blank.txt", "Hi")
//     await fs.writeFile("./blank.txt", "Hi Deepanshu Kant 21")
// }

// fileSystem();

const http = require("http");

http.createServer(function (request, response) {

    // console.log(request.header)
    // console.log(request.url)
    response.end("Hello World\n")
    // response.end(`{"food1":"Pizza", "food2":"Burger"}`)
    // response.write("Herllo world")
    // response.end();
}).listen(3000);

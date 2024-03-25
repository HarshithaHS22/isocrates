// // // const name ='Harshitha'
// // // console.log(name);


// // // // GLOBAL DECLARATIONS:
// // // const speak = () => {        // Used Arrow function
// // //     console.log('Hello iSOCRATES');
// // // }
// // // speak();


// // // GLOBAL OBJECT:
// // console.log(global)
// // global.setTimeout( () => {           // call the fun after 3s as we set the time keeps delay for 3 s and keep on running
// //     console.log('in the timeout');
// // },3000);
// // // const int = setInterval(() => {
// // //     console.log('in the interval'); // not required
// // // },1000);
// // // to know the current dir and file meta deltails
// // console.log(__dirname);
// // console.log(__filename);



// // MODULES:
// //single entity import
// // const people = require('./people');              // ./ --> tells the current dir file
// // console.log(people);

// // USING dot operator we can fetch th data separately:
// // Mutiple imports:  --> 1st Method
// const data = require('./people');
// console.log(data.people,data.ages);
// // Mutiple imports:  --> 2nd Method
// const {people,ages} = require('./people')
// console.log(people);
// console.log(ages);



// // to fetch OS related info:
// const os = require('os');
// console.log(os.platform())   // --> 1st method
// console.log(os.homedir())    // --> 2nd 


// // FILE System:
// const fs = require('fs');
// //READ FILE:
// // fs.readFile('./docs/iso.txt',( err,data) => {           // arrow fun(=>) can use at that moment and once it is done it will destroyed
// //     if(err){
// //         console.log(err);
// //     }
// //     console.log(data.toString());
// // });
// // WRITE FILE:
// // fs.writeFile('./docs/write.txt','Hello, again from iSOCRATES', () => {
// //     console.log('File written successfully');
// // });
// if(!fs.existsSync('./assets'))   {    // checks weather assets folder aleady exists
// // to create folder
//     fs.mkdir('./assets',err => {
//     if(err){
//         console.log(err);
//     }
//     console.log('Folder is Created')
// });
// }
// else{
//     console.log('Folder already exists')
// }
// // to remove folder
//         fs.rmdir('./assets',err => {
//         if(err){
//             console.log(err);
//         }
//         console.log('Folder deleted')
//     });
    
// // TO DELETE FILE:
// if(fs.existsSync('./docs/write.txt'))  {
//     fs.unlink('./docs/write.txt',err => {
//         if(err){
//             console.log(err);
//         }
//         console.log('File deleted');
//     });
// } 

// // STREAMS
const fs = require('fs');
const readStream = fs.createReadStream('./docs/iso.txt',{encoding:'utf-8'});   // UTF - 8 to encode the dta and used in readmethod
const writeStream = fs.createWriteStream('./docs/writestrem.txt');
readStream.on('data', chunk =>{
    //console.log(chunk);
    writeStream.write(chunk);
});

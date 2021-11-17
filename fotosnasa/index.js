const readline = require("readline-sync")
const terminalImage = require("terminal-image");
const got = require("got");

async function showimage(img){
    const {body} = await(img,{encoding:null});
    console.log(await terminalImage.buffer(body));
}

async function getAPOD(){
    const dados = await got("https://api.nasa.gov/planetary/apod?api_key=g0NZ29i4P20HVX8lT8CfRW2YKhwmfcqWpdnjsrBi", {json:true})
    var apodimage = dados.body;
    //console.log(apodimage); 
    showimage(apodimage.url)    
}

function data(){
    var date = readline.question("Insera a data da foto que deseja: ");
    getAPOD(date);
}
data();




//pegar os dados na nasa(APOD)

const yargs = require("yargs");

const {addMovie, listMovie} = require("./utils/index.js")

const app = (yargsObj) =>{
    if (yargsObj.add){
        addMovie({
            title: yargsObj.title, actor: yargsObj.actor
        })
    } else if (yargsObj.list){
        listMovie();
    } else {
        console.log("wrong command");
    };
};

app(yargs.argv);
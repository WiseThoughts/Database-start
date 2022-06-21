const fs = require("fs");

const addMovie = (movieObj)=>{
    try{
        const StringyObj = JSON.stringify(movieObj);
        fs.writeFileSync('./stroage.json',StringyObj)
    } catch(error){
        console.log(error)
    }
};

const listMovie = ()=>{
    try{
        const movieList = fs.readFileSync('./storage.json');
        console.log(movieList);
    }catch (error){
        console.log(error);
    };
};


module.exports ={addMovie,listMovie}
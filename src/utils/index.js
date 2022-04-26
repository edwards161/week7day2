//created file sync library
const fs = require("fs");

const addMovie = (movieObj) => {
    try {
        //var create, json = built in function.
        const stringifyObj = JSON.stringify(movieObj);
        fs.writeFileSync('./storage.json', stringifyObj);
    } catch (error) {
        console.log(error);
    }
}

const listMovies = () => {
    try {
        const jsonList = fs.readFileSync('./storage.json');
        const listParser = JSON.parse(jsonList);
        console.log(listParser)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { addMovie, listMovies };
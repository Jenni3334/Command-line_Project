const cookieNames  = require("./cookie");
// import 
const cookieJSON = require("./cookie.json")

//this will allow the user to create a new cookie type
function newCookie(type){
    return cookieJSON.filter((cookie) => {
        return type.cookieName === cookie;
      });
    }
    console.log(newCookie(process.argv[1]));

    //list of all items
    const cookie = cookieJSON.filter((cookies) => {
        return cookie.cookieName
      });

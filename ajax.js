//postman to check by get key and give acess to url for error
/*
2XX -------> for sucess
3XX -------> for response timing/redirecting messsage
4XX -------> for our fault failiure in link
5XX -------> for server failiure
*/
// java script object notation

movies = {title: "asdfgryti" , score: "73485464" , imdb: "1234532456" , asdfg: "asdfg" }
//{title: "asdfgryti", score: "73485464", imdb: "1234532456", asdfg: "asdfg"}

JSON.stringify(movies)
//"{"title":"asdfgryti","score":"73485464","imdb":"1234532456","asdfg":"asdfg"}"

//except bool all in ""

// if url has a type like ____url_____/___url____/_url_?_id_=:_value__
//so this ? and text after : query string(id's) are  and its id's value respectively

//////////////////////////////////////////////////////////XML////////////////////////////////////////////////////////////
const myReq = new XMLHttpRequest();

myReq
//XMLHttpRequest {onreadystatechange: null, readyState: 0, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}

myReq.onload = function(){          //on completion
    console.log('data');
    console.log(this)
}
/*
ƒ (){
    console.log('data');
    console.log(this)
}
*/

myReq.onerror = function(){             //on error
    console.log('error');
    console.log(this);
    const data =  JSON.parse(this.responseText);      //parse out the text taken from it
    console.log(data.ticker.price)
}
/*ƒ (){
    console.log('error');
    console.log(this);
}*/

myReq.open("GET" , "https://api.cryptonator.com/api/ticker/btc-usd")

myReq.send();
/*VM306:1 Not allowed to load local resource: https://api.cryptonator.com/api/ticker/btc-usd
(anonymous) @ VM306:1*/

//VM200:2 error

//VM200:3 XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}

////////////////////////////////////////////////////////////////Fetch///////////////////////////////////////////////////////

fetch("https://api.cryptonator.com/api/ticker/btc-usd")
    .then(res => {
        console.log("Response " , res)
        return res.json();      //returns promise
    })      //rake a while i.e, pending
    .then( data => {
        console.log("Data parsed" , data);
    })
    .catch(er => {
        console.log("oh no" ,er);
    })
//oh no TypeError: Failed to fetch

fetch("https://api.cryptonator.com/api/ticker/btc-usd")
    try{
        console.log("Response " , res)
        return res.json();
    }
    catch(e){
        console.log("oh no" ,e);
    }

//can also try and catch

//better than XML but not best

/////////////////////////////////////////////////////////////////////////axios//////////////////////////////////////////////////////

const res = axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
    .then( res => {
        console.log(res.data.ticker.price)
    })
    .catch( e => {
        console.log("error");
    })

//can also be done by try and catch

const axi = async => {
    try{
        const config = { headers: { Accept: 'application/json'} };
        //for headeers there is headers: as keyword and than we give Accept: for appling to shorten the content 
        /*
            application/json ----->specific for content  json rsesponse
            text/html-------->html response
            text/plain------->text response
        */
        const res = await axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
        console.log(res.data.ticker.price)
    }
    catch(e){
        console.log("oh no" ,e);
    }
}

const jokes = document.querySelector("#selector");
const getJoke = async() => {
        const config = { headers: { Accept: 'application/json'} };
        const res = await axios.get("https://api.cryptonator.com/api/ticker/btc-usd");
        console.log(res.data.joke);
        const li = document.createElement("li");
        li.innerText = res.data.joke
        jokes.append(li);
}

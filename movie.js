const API_KEY="81b854cf";
const searchBtn=document.getElementById("searchBtn")
const searchinput=document.getElementById("searchInput")
const moviesContainer=document.getElementById("moviesContainer")

async function serachmovies(movieName){
    const response=await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}`)
    console.log(response);
    const data=await response.json();
    console.log(data)
}
serachmovies("devara");
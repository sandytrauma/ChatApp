
const API_KEY = "ad4ca56f3d3d4e4dbc19e5259d15a7bb";
const url = "https://newsapi.org/v2/everything?q="

async function fetchData(query){
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`) 
    const data = await res.json()
    console.log(data)
}

fetchData("everything")
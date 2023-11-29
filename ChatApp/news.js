
const API_KEY = "ad4ca56f3d3d4e4dbc19e5259d15a7bb";
const url = "https://newsapi.org/v2/everything?q="

async function fetchData(query){
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`) 
    const data = await res.json()
    console.log(data)
    displayNews(data.articles);
}

function displayNews(articles){
    const newsContainer = document.getElementById("news-container");

    articles.forEach(article =>{
        const newsItem = document.createElement("div");
        newsItem.classList.add("news-item");

        const title = document.createElement("h2");
        title.textContent = article.title;
  
        const description = document.createElement("p");
        description.textContent = article.description;
  
        const source = document.createElement("p");
        source.textContent = `Source:${article.source.name}`;
  
        newsItem.appendChild(title);
        newsItem.appendChild(description);
        newsItem.appendChild(source);
  
        newsContainer.appendChild(newsItem);
    })
}

fetchData("India")

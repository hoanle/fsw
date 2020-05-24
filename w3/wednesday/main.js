const apiKey = "f9c52133484e4f419dca7751b29bacaa"
let newsList = []
let sourcesList = []
let selectedSourcesList = []
let currenCategory = 'general'
let currentPage = 1;

const loadNews = async (category, query, page) => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&category=${category}&q=${query}&page=${page}`;
    let data = await fetch(url);
    let result = await data.json();

    let articles = result.articles;

    if (page == 1) {
        newsList = articles;
    } else {
        console.log(`Load more ${currentPage} ${articles.length}`);
        
        if (articles.length > 0) {
            newsList = newsList.concat(articles)
        }

        console.log(`Load more ${currentPage} ${newsList.length}`);
    }
    currentPage = currentPage + 1;

    filteredBySource()
    console.log(newsList);
}

const loadSources = async () => {
    let url = `https://newsapi.org/v2/sources?apiKey=${apiKey}`;
    let data = await fetch(url);
    let result = await data.json();

    sourcesList = result.sources;

    renderSourceList(sourcesList);
    
}

const renderList = (list) => {
    let html = list.map(news => {
    
        let newsItemHtml =
            `
            <div class="container news-container">
                <div class="row">
                    <div class="col-md-4 img-container">
                        <img src="${news.urlToImage}" class="w-100"/>
                    </div>
                    <div class="col-md-8 content-container">
                        <h6 class="news-source">${news.source.name}</h6>
                        <a href="${news.url}" target="_blank">${news.title}</a>
                        <h6>${news.description}</h6>
                        <h6 class="news-time">${news.publishedAt}</h6>    
                    </div>
                </div>
            </div>
            `
        return newsItemHtml;
    }).join('');
    document.getElementById("news-container").innerHTML = html;
    document.getElementById("count-container").innerHTML = `${list.length} of ${newsList.length}`
}

const renderSourceList = (list) => {
    let html = list.map(source => {
        let itemHtml =  
        `
        <div>
            <input type="checkbox" id="${source.id}" onchange="onChangeSource(this);"/> ${source.name}
        </div>
        
        `
        return itemHtml;
    }).join('');
    document.getElementById('source-container').innerHTML = html;
}

const performSearch = (category) => {
    let textSearch = document.getElementById('search-input').value
    currenCategory = category
    loadNews(currenCategory, textSearch, currentPage)
}

const onChangeSource = (cb) => {
    console.log("onChangeSource");
    if (cb.checked) {
        console.log("onChangeSource checked");
        let source = {
            id: cb.id
        }
        selectedSourcesList.push(source);
    } else {
        console.log("onChangeSource not checked");
        selectedSourcesList = selectedSourcesList.filter(x => x.id != cb.id);
    }

    filteredBySource();
}

const filteredBySource = () => {
    if (selectedSourcesList.length > 0) {
        let filteredNewsList = newsList.filter(news => {
            console.log(`filter news ${news.source.name}`);
            return selectedSourcesList.filter(source => source.id == news.source.id).length > 0 
        })
        renderList(filteredNewsList);
    } else{
        renderList(newsList);
    }
}

const loadMore = () => {
    console.log("loadMore");
    performSearch(currenCategory);
}

const selectCategory = (category) => {
    currentPage = 1;
    performSearch(category);
}

const submitSearch = () => {
    currentPage = 1
    performSearch(currenCategory);
}

performSearch(currenCategory);
loadSources();
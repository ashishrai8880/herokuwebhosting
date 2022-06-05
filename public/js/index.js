// api key = c43e80e0e0ea4c90ba6911d73d4c2d71
console.log("ok hai");

// url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c43e80e0e0ea4c90ba6911d73d4c2d71'
const url = 'https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=c43e80e0e0ea4c90ba6911d73d4c2d71';

const getNews = async () => {
    const data = await fetch(url);
    filteredData = await data.json();
    const jsonData = filteredData.articles;

    let newsItem = document.getElementById('newsItem');

    jsonData.forEach(element => {



        let html = `<div class="p-4 md:w-[30%] sm:mb-0 mb-6 bg-white mx-3 my-3 rounded-lg">
                    <div class="rounded-lg h-64 overflow-hidden">
                     <img alt="content" class="object-cover object-center h-full w-full"
                     src='${element.urlToImage}'>
                </div>
                <h2 class="text-xl font-medium title-font text-gray-900 mt-5">${element.title}</h2>
                 <p class="text-base leading-relaxed mt-2">${element.description}</p>
                 <a href="${element.url}"  target="_blank"
                class="text-white bg-blue-600 inline-flex items-center mt-3 px-5 py-2 rounded-lg ">
                 Read More
                 </a>
                </div>`


        
        newsItem.innerHTML += html;

    });
}

getNews();



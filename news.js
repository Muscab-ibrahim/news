const navbarToggle = document.querySelector('.navbar-toggle');
const navbarNav = document.querySelector('.navbar-nav');

navbarToggle.addEventListener('click', () => {
  navbarNav.classList.toggle('show');
});


const container = document.querySelector('.wrapper')
const btn = document.querySelector('#btn');
const loader = document.querySelector('#loader')
console.log(loader)



const apikey = '22a8e9dba2d7443fb6128acbdfe703b8';
async function news( url) {
loader.style.display = 'block';
const response = await fetch(url)
const data = await response.json()
container.style.background = 'rgb(239, 239, 239)';
loader.style.display = 'none';


const news =  data.articles;

addDom(news)

}

btn.addEventListener('click', () => {
  const value = document.querySelector('#search').value;

  container.innerHTML = ''
  container.style.background = '';
  news(` https://newsapi.org/v2/everything?q=${value}&from=2024-07-17&sortBy=publishedAt&apiKey=${apikey}`);


})



const addDom = (news) => {

  news.forEach(data => {
    console.log(data)

    const titleSlice = data.title.slice(0, 35) + "....";

    const contentSlice = data.content.slice(0, 60) + "....";
    container.innerHTML += `   <div class="container">
   
    <img src="${data.
   urlToImage}" alt="" width="200px">
   <div class ="content">
    <h3 >${data.title.slice(0, 35) + "...."}</h3>
    <p >${data.content.slice(0, 140)}</p>
    <div>
        <div class="puplished">
        <p>posted : <span>${data.publishedAt.slice(0,10)}</span ></p>
          <a href="${data.url}">${data.source.name}</a>
      </div>
  
    </div>`

    const link = document.querySelector('.container');

    // container.addEventListener('click', () => {
    //   document.body = data.url;
    // })

  
  });
}

news(`https://newsapi.org/v2/everything?q=programming&from=2024-07-17&sortBy=publishedAt&apiKey=${apikey}`)

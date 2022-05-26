

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(json => userName(json))



function userName(json) {

  for (let user of json) {
    console.log(user.name);
    let ul = document.getElementById('user-Names');
    let li = document.createElement('li');
    li.innerText = `User name: ${user.name} Email: ${user.email}
    City: ${user.address.city} Street: ${user.address.street}
    Phone: ${user.phone}
    Website: ${user.website}
    `;
    ul.appendChild(li);
  }
}


document.getElementById('userButton').addEventListener('click', function () {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => userName(json))
})

let article = document.createElement('article');
let h3 = document.createElement('h3');
let p = document.createElement('p');

let blogsSection = document.getElementById('blogs-Section');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => userPost(posts))

function userPost(posts) {
  for (let post of posts) {

    console.log(post.title);
    let article = document.createElement('article');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    h3.innerHTML = post.title;
    p.innerText = post.body;
    article.appendChild(h3);
    article.appendChild(p);
    blogsSection.appendChild(article);
    article.classList.add('border', 'rounded', 'mb-2', 'radius-3');
    h3.classList.add('bg-primary', 'text-white','p-3');
    p.classList.add('bg-light','bg-gradient', 'p-3')

  }
}
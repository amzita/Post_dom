// Hacer una solicitud de la Appi para el post
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts => {
  const postsContainer = document.getElementById('posts-container');

  // Creamos cada elemento para el HTML 
  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const titleElement = document.createElement('h2');
    titleElement.textContent = post.title;

    const contentElement = document.createElement('p');
    contentElement.textContent = post.body;

    postElement.appendChild(titleElement);
    postElement.appendChild(contentElement);

    postsContainer.appendChild(postElement);
  });
})
.catch(error => {
  console.error('Error al obtener los posts:', error);
});
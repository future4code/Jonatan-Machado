function handleSubmit() {
  event.preventDefault();
  let publicationTitle = document.getElementById('publicationTitle').value;
  let publicationAuthor = document.getElementById('publicationAuthor').value;
  let postContent = document.getElementById('postContent').value;

  handlePost(publicationTitle, publicationAuthor, postContent);
}

function handlePost(title, author, content) {
  let blogPost = {
    posts: [],
    title: [],
    content: [],
  };

  blogPost.title.push(title);
  blogPost.posts.push(author);
  blogPost.content.push(content);

  document.getElementById('teamPost').innerHTML += `
  <h1>${blogPost.title}</h1>
  <br/>
  <h2>${blogPost.posts}</h2>
  <br/>
  <p> ${blogPost.content}</p><hr>
`;
}


async function fetchposts(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/posts');
        const data=await response.json();
        console.log(data);
        displayPost(data);
    }catch(error){
        console.log('erroe',error);
    }
}
fetchposts();
function displayPost(data){
    const posts=document.getElementById('posts');
    data.forEach(post=>{
    const postDiv=document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML=
    `<h2>USer ID: ${post.userId}</h2>
    <p>Post ID: ${post.id}</p>
    <h3>Title:${post.title}</h3>
    <p>Body:${post.body}<p>
    <hr>`;
    posts.appendChild(postDiv);
    }); 
}


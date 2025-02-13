document.addEventListener("DOMContentLoaded", function () {
    const Button = document.getElementById("fetchPostsButton");
    Button.addEventListener("click", function () {
        const userId = document.getElementById("userId").value;
        if (userId.trim() === "") {
            alert("Please enter user ID");
            return;
        }
        fetchPosts(userId);
    });
});

async function fetchPosts(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await response.json();

        if (posts.length === 0) {
            alert("No posts found for this user");
            return;
        }

        for (const post of posts) {
            try {
                const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
                const comments = await commentsResponse.json();
                showPosts(post, comments);
            } catch (innerError) {
                console.error(`Error fetching comments for post ID ${post.id}: ${innerError}`);
            }
        }
    } catch (outerError) {
        console.error(`Error fetching posts: ${outerError}`);
        alert("Please try again");
    }
}

function showPosts(post, comments) {
    const postContainer = document.getElementById("posts");

    // Create a post element
    const postElement = document.createElement("div");
    postElement.className = "post";

    // Set the post content
    postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <h4>Comments:</h4>
    `;

    // Create a list for comments
    const commentsList = document.createElement("ul");
    comments.forEach((comment) => {
        const commentItem = document.createElement("li");
        commentItem.textContent = comment.body;
        commentsList.appendChild(commentItem);
    });

    // Append comments list to the post element
    postElement.appendChild(commentsList);

    // Append the post element to the container
    postContainer.appendChild(postElement);
}

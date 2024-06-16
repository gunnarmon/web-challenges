console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');

likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

//new post container
const newPost = document.createElement("article");
const newPostContent = document.createElement("p");
const newPostFooter = document.createElement("footer");
const newUserName = document.createElement("span");
const newButton = document.createElement("button");

//new post content
newPostContent.textContent = `
dis is nieuwe content
`;

newUserName.textContent = `
@newUserName
`;

newButton.textContent = `
♥ Like
`;

//new class declaration
newPost.classList.add("post");
newPostContent.classList.add("post__content");
newPostFooter.classList.add("post__footer");
newUserName.classList.add("post__username");
newButton.classList.add("post__button");
newButton.addEventListener("click", handleLikeButtonClick);
//

newPost.append(newPostContent, newPostFooter);
newPostFooter.append(newUserName, newButton);
document.body.append(newPost);

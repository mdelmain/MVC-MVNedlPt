const newFormHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector("#content").value.trim();
  const post_id = document.querySelector("#post_id").value.trim();

  if (content && post_id) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ content, post_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace(`/post/${post_id}`);
    } else {
      alert("Failed to create comment");
    }
  }
};

const addComment = async (event) => {
    document.querySelector("#comment-form").classList.remove('hidden');
    document.querySelector('#add-comment-btn').classList.add('hidden');
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newFormHandler);

document
   .querySelector("#add-comment-btn")
   .addEventListener("click",addComment)

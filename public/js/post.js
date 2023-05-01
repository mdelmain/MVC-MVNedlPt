const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title").value.trim();
  const content = document.querySelector("#content").value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create post");
    }
  }
};

const editFormHandler = async (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form['title'].value;
    const content = form['content'].value;
    const post_id = form['post_id'].value;

    if (title && content && post_id) {
        const response = await fetch(`/api/posts/${post_id}`, {
          method: "PUT",
          body: JSON.stringify({ title, content }),
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        if (response.ok) {
          document.location.replace("/dashboard");
        } else {
          alert("Failed to create post");
        }
      }
}

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete post");
    }
  }
};

const addPost = async () => {
  document.querySelector("#post-form").classList.remove("hidden");
  document.querySelector("#add-post-btn").classList.add("hidden");
};

const editPost = async (event) => {
    const element = event.target;
    const post_id = element.dataset.id;

    document.querySelector(`#card-${post_id} .card-body`).classList.remove("hidden");
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector("#add-post-btn")
  .addEventListener("click", addPost);

document
  .querySelectorAll(".edit_post").forEach((element) => {
    element.addEventListener("click", editPost);
  });

document
  .querySelectorAll(".edit-post-form").forEach((element) => {
    element.addEventListener("submit", editFormHandler);
  });

document
  .querySelectorAll(".delete-post-btn").forEach((element) => {
    element.addEventListener("click", delButtonHandler);
  });

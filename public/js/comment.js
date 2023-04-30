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
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create comment");
    }
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newFormHandler);

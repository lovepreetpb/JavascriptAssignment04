// Add student info dynamically
document.getElementById("student-info").textContent = "Name: Lovepreet Singh | ID: 200597146";

// Event listener
document.getElementById("get-joke").addEventListener("click", getJoke);

// Fetch and display joke
function getJoke() {
  const url = "https://v2.jokeapi.dev/joke/Any?type=single";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const jokeContainer = document.getElementById("joke-container");
      jokeContainer.innerHTML = `<p>${data.joke}</p>`;
      jokeContainer.classList.remove("fade-in"); // Reset animation
      void jokeContainer.offsetWidth; // Trigger reflow
      jokeContainer.classList.add("fade-in");
    })
    .catch(error => {
      console.error("Error:", error);
      document.getElementById("joke-container").innerHTML = "<p>Oops! Couldn't get a joke.</p>";
    });
}

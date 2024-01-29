"use strick";

const superHero = "superhero.json";

// Fetch the JSON file
fetch(superHero)
  .then((response) => response.json())
  .then((data) => {
    // Sort the data by name
    data.sort((a, b) => a.name.localeCompare(b.name));

    // Display the sorted data in the <ul> element
    const list = document.getElementById("superhero-list");
    data.forEach((superhero) => {
      const li = document.createElement("li");
      li.textContent = `${superhero.name}`;
      list.appendChild(li);
    });
  })
  .catch((error) => console.error(error));

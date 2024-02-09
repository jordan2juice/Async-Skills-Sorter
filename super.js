"use strick";

const superHero = "superhero.json";

// Fetch the JSON file
async function getData(superHero) {
  const response = await fetch(superHero);
  const data = await response.json();
  const sortedData = data.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  displayCharacters(sortedData);

  getData(superHero);

  // Display the sorted data in the <ul> element
  const list = document.getElementById("superhero-list");
  data.forEach((superhero) => {
    const li = document.createElement("li");
    li.textContent = `${superhero.name}`;
    list.appendChild(li);
  });
}

getData();

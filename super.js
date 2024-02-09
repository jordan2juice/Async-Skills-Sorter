"use strict";

// const superHero = "superhero.json";

// Fetch the JSON file
async function getData() {
  try {
    const data = await fetch("superhero.json");
    const newData = await data.json;
    console.log(newData);
    const sortData = newData.sort((a, b) => (a.level > b.level ? -1 : 1));
  } catch (error) {
    console.error(error);
  }
}

getData();

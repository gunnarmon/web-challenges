console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);

  const newResponse = await response.json();

  console.dir(newResponse);

  const starWarsData = newResponse.results;

  const eyeColor = starWarsData[2]["eye_color"];
  const filmsR5D4ActedIn = starWarsData[7].films[0];

  console.dir("Eyecolor of R2-D2: ", eyeColor);
  console.dir("First film of R5-D4: ", filmsR5D4ActedIn);
}

fetchData();

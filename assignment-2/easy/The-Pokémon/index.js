const cardsContainer = document.getElementById("cards");

async function loadPokemons() {
  cardsContainer.innerHTML = "";

  const count = Number(document.getElementById("count").value);
  const selectedType = document.getElementById("type").value;

  if (!count || !selectedType) {
    alert("Please enter number and select type");
    return;
  }

  let displayed = 0;
  let id = 1;

  while (displayed < count) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    const types = data.types.map(t => t.type.name);

    if (types.includes(selectedType)) {
      createCard(data);
      displayed++;
    }

    id++;
  }
}

function createCard(pokemon) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${pokemon.name.toUpperCase()}</h3>
    <img src="${pokemon.sprites.front_default}" />
    <p class="type">Type: ${pokemon.types.map(t => t.type.name).join(", ")}</p>
    <p>Height: ${pokemon.height}</p>
    <p>Weight: ${pokemon.weight}</p>
  `;

  cardsContainer.appendChild(card);
}

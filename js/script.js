document.addEventListener("DOMContentLoaded", () => {
    loadCharacters();
});

async function loadCharacters() {
    try {
        const response = await fetch("./data/characters.json");

        if (!response.ok) {
            throw new Error("Failed to load characters.");
        }

        const characters = await response.json();
        
        displayCharacters(characters);
    } catch (error) {
        console.error("Error loading characters: ", error);
    }
}

function displayCharacters(characters) {
    const container = document.getElementById("charactersContainer");
    
    container.innerHTML = "";

    characters.forEach(character => {
        const card = document.createElement("div");

        card.classList.add("character-card");

        card.innerHTML = `
            <div class="card-inner">

                <div class="card-front">
                    <img src="${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                    <p>${character.house || ""}</p>
                </div>

                <div class="card-back">
                    <p><strong>Nacimiento:</strong> ${character.born}</p>
                    <p><strong>Estatus de sangre:</strong> ${character.bloodstatus}</p>
                    <p><strong>Especie:</strong> ${character.species}</p>
                    <p><strong>Patronus:</strong> ${character.patronus}</p>
                    <p><strong>Estado:</strong> ${character.status}</p>
                    <p><strong>Actor:</strong> ${character.actor}</p>
                    <p>${character.description}</p>
                </div>

            </div>
        `;

    container.appendChild(card);
    });
}
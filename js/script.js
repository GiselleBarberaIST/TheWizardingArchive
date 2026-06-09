document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("charactersContainer")) {
        loadCharacters();
    }

    if (document.getElementById("booksContainer")) {
        loadBooks();
    }

    if (document.getElementById("institutionsContainer")) {
        loadInstitutions();
    }
});

// PERSONAJES
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
                    <p><strong>Ocupación:</strong> ${
                        Array.isArray(character.occupation)
                        ? character.occupation.join(", ")
                        : character.occupation ?? "Desconocido"
                    }</p>
                    <p><strong>Actor:</strong> ${character.actor}</p>
                    <p>${character.description}</p>
                </div>

            </div>
        `;

    container.appendChild(card);
    });
}

// LIBROS
async function loadBooks() {
    try {
        const response = await fetch("./data/books.json");

        if (!response.ok) {
            throw new Error("Failed to load books.");
        }

        const books = await response.json();
        
        displayBooks(books);
    } catch (error) {
        console.error("Error loading books: ", error);
    }
}

function displayBooks(books) {
    const container = document.getElementById("booksContainer");

    if (!container) {
        console.warn("booksContainer no existe en esta página");
        return;
    }
    
    container.innerHTML = "";

    books.forEach(book => {
        const card = document.createElement("div");

        card.classList.add("book-card");

        card.innerHTML = `
            <div class="card-inner">

                <div class="card-front">
                    <img src="${book.image}" alt="${book.title}">
                    <h2>${book.title}</h2>
                </div>

                <div class="card-back">
                    <p><strong>Editorial:</strong> ${book.editorial}</p>
                    <p>${book.synopsis}</p>
                </div>

            </div>
        `;

    container.appendChild(card);
    });
}

// INSTITUCIONES
async function loadInstitutions() {
    try {
        const response = await fetch("./data/institutions.json");

        if (!response.ok) {
            throw new Error("Failed to load institutions.");
        }

        const institutions = await response.json();
        
        displayInstitutions(institutions);
    } catch (error) {
        console.error("Error loading institutions: ", error);
    }
}

function displayInstitutions(institutions) {
    const container = document.getElementById("institutionsContainer");

    if (!container) {
        console.warn("institutionsContainer no existe en esta página");
        return;
    }
    
    container.innerHTML = "";

    institutions.forEach(institution => {
        const card = document.createElement("div");

        card.classList.add("institution-card");

        card.innerHTML = `
            <div class="card-inner">

                <div class="card-front">
                    <img src="${institution.image}" alt="${institution.name}">
                    <h2>${institution.name}</h2>
                    <p>${institution.type}</p>
                </div>

                <div class="card-back">
                    <p><strong>Fundada en:</strong> ${institution.founded}</p>
                    <p><strong>Fundador/es:</strong> ${institution.founders.join(", ")}</p>
                    <p><strong>Lema:</strong> ${institution.motto || ""}</p>
                    <p><strong>Se encuentra en:</strong> ${institution.location}</p>
                    <p>${institution.description}</p>
                </div>

            </div>
        `;

    container.appendChild(card);
    });
}
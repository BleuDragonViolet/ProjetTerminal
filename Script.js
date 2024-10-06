document.addEventListener("DOMContentLoaded", function() {
    let dateAsc = true;
    let nameAsc = true;
    let priceAsc = true;

    document.querySelectorAll(".filter-buttons button").forEach(button => {
        button.addEventListener("click", function() {
            const filterType = this.getAttribute('data-filter');
            if (filterType === 'date') filterByDate();
            if (filterType === 'name') filterByName();
            if (filterType === 'price') filterByPrice();
        });
    });

    function filterByDate() {
        sortConsoles((a, b) => dateAsc ? a.date - b.date : b.date - a.date);
        dateAsc = !dateAsc;
    }

    function filterByName() {
        sortConsoles((a, b) => nameAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
        nameAsc = !nameAsc;
    }

    function filterByPrice() {
        sortConsoles((a, b) => priceAsc ? a.price - b.price : b.price - a.price);
        priceAsc = !priceAsc;
    }

    function sortConsoles(compareFn) {
        let consoleGrid = document.getElementById("console-grid");
        let consoles = Array.from(consoleGrid.children);
        consoles.sort((a, b) => {
            return compareFn({
                date: parseInt(a.getAttribute("data-date")),
                name: a.querySelector("h3").textContent,
                price: parseFloat(a.getAttribute("data-price"))
            }, {
                date: parseInt(b.getAttribute("data-date")),
                name: b.querySelector("h3").textContent,
                price: parseFloat(b.getAttribute("data-price"))
            });
        });
        consoleGrid.innerHTML = "";
        consoles.forEach(console => consoleGrid.appendChild(console));
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Musique de fond qui se lance au chargement de la page
    let audioFond = new Audio('song/thème/Wii/Wii Menu Music.mp3'); // Fichier musique de fond Wii
    audioFond.loop = true; // La musique se répète en boucle
    audioFond.play();

    // Placeholder pour le son de survol et le son de clic
    let audioSurvol = new Audio();
    let audioClic = new Audio();

    // Ajouter des sons à tous les éléments cliquables (boutons, liens, etc.)
    const clickableElements = document.querySelectorAll('button, a, .clickable');

    clickableElements.forEach(element => {
        // Son de survol quand la souris passe sur un élément cliquable
        element.addEventListener('mouseover', function() {
            playSurvolSound(); // Appelle la fonction pour jouer le son de survol
        });

        // Son de clic quand on clique sur un élément cliquable
        element.addEventListener('click', function() {
            playClicSound(); // Appelle la fonction pour jouer le son de clic
        });
    });

    // Fonction pour jouer le son de survol
    function playSurvolSound() {
        audioSurvol.src = 'song/thème/Wii/wii-survol.mp3'; // Fichier son de survol Wii
        audioSurvol.play();
    }

    // Fonction pour jouer le son de clic
    function playClicSound() {
        audioClic.src = 'song/thème/Wii/Wii Menu Click.mp3'; // Fichier son de clic Wii
        audioClic.play();
    }
});
document.addEventListener("DOMContentLoaded", function() {
    let audioFond = new Audio('song/thème/Wii/Wii Menu Music.mp3'); // Fichier musique de fond Wii
    let audioSurvol = new Audio(); // Placeholder pour le son de survol
    let audioClic = new Audio(); // Placeholder pour le son de clic

    // Ajouter des sons à tous les éléments cliquables (boutons, liens, etc.)
    const clickableElements = document.querySelectorAll('button, a, .clickable');

    // Démarrer la musique de fond après un clic de l'utilisateur
    document.body.addEventListener('click', function startMusic() {
        audioFond.loop = true; // La musique se répète en boucle
        audioFond.play(); // Jouer la musique de fond

        // Retirer l'écouteur pour éviter de relancer la musique à chaque clic
        document.body.removeEventListener('click', startMusic);
    });

    clickableElements.forEach(element => {
        // Son de survol quand la souris passe sur un élément cliquable
        element.addEventListener('mouseover', function() {
            playSurvolSound(); // Appelle la fonction pour jouer le son de survol
        });

        // Son de clic quand on clique sur un élément cliquable
        element.addEventListener('click', function() {
            playClicSound(); // Appelle la fonction pour jouer le son de clic
        });
    });

    // Fonction pour jouer le son de survol
    function playSurvolSound() {
        audioSurvol.src = 'song/thème/Wii/Wii Menu survol.mp3'; // Fichier son de survol Wii
        audioSurvol.play();
    }

    // Fonction pour jouer le son de clic
    function playClicSound() {
        audioClic.src = 'song/thème/Wii/Wii Menu Click.mp3'; // Fichier son de clic Wii
        audioClic.play();
    }
});

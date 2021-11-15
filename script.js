const bouton = document.getElementById("bouton");
const donnees = document.getElementById("donnees");

const url = "http://www.filltext.com/?rows=10&prenom={firstName}&nom={lastName}&age={numberRange|18, 62}";

bouton.addEventListener("click", () => {
    fetch(url)
        .then(reponse => reponse.json())
        .then(data => {
            const ul = document.createElement("ul");
            for (const personne of data) {
                const li = document.createElement("li");
                li.innerText = personne.prenom + " " + personne.nom + " (" + personne.age + ")";
                ul.appendChild(li);
            }
            donnees.appendChild(ul);
        });

});
